'use client';

import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Pencil, Trash2 } from 'lucide-react';
import * as XLSX from 'xlsx';

export default function ModuleQuestionsPage() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: 'What is HTML?',
      options: ['A markup language', 'A programming language', 'A CSS library', 'A server'],
      answer: 'A markup language',
    },
    {
      id: 2,
      question: 'Which tag is used to make text bold in HTML?',
      options: ['<bold>', '<b>', '<strong>', '<text-bold>'],
      answer: '<b>',
    },
  ]);

  const [form, setForm] = useState({
    question: '',
    options: ['', '', '', ''],
    answer: '',
    file: null,
  });

  const [editingQuestion, setEditingQuestion] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAddQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      question: form.question,
      options: [...form.options],
      answer: form.answer,
    };
    setQuestions([...questions, newQuestion]);
    setForm({ question: '', options: ['', '', '', ''], answer: '', file: null });
  };

  const handleDelete = (id: number) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const handleFileChange = (e: any) => {
    setForm({ ...form, file: e.target.files[0] });
  };

  const handleExcelUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target?.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData: any[] = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      const newQuestions = parsedData.slice(1).map((row, index) => ({
        id: questions.length + index + 1,
        question: row[0],
        options: [row[1], row[2], row[3], row[4]],
        answer: row[5],
      }));

      setQuestions((prev) => [...prev, ...newQuestions]);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* === LEFT SIDE === */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Module: Introduction to Web</h2>
        <p className="text-sm text-muted-foreground">Description: Learn the basics of HTML, CSS and JS</p>

        <div className="space-y-3">
          <Label>Upload Exam (PDF)</Label>
          <Input type="file" onChange={handleFileChange} />
        </div>

        <div className="space-y-3">
          <Label>Question</Label>
          <Textarea
            placeholder="Enter question"
            value={form.question}
            onChange={(e) => setForm({ ...form, question: e.target.value })}
          />
        </div>

        {['A', 'B', 'C', 'D'].map((opt, idx) => (
          <div key={opt} className="space-y-1">
            <Label>Option {opt}</Label>
            <Input
              value={form.options[idx]}
              onChange={(e) => {
                const updatedOptions = [...form.options];
                updatedOptions[idx] = e.target.value;
                setForm({ ...form, options: updatedOptions });
              }}
            />
          </div>
        ))}

        <div className="space-y-1">
          <Label>Select Answer</Label>
          {/* <Select value={form.answer} onValueChange={(value: any) => setForm({ ...form, answer: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Choose correct answer" />
            </SelectTrigger>
            <SelectContent>
              {form.options.map((opt, idx) => (
                <SelectItem key={idx} value={opt}>
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select> */}
        </div>

        <div className="flex gap-3">
          <Button onClick={handleAddQuestion}>Add Question</Button>
          <Button variant="outline" onClick={() => fileInputRef.current?.click()}>
            Upload from Excel
          </Button>
          <input
            type="file"
            accept=".xlsx, .xls"
            ref={fileInputRef}
            onChange={handleExcelUpload}
            className="hidden"
          />
        </div>
      </div>

      {/* === RIGHT SIDE === */}
      <div className="overflow-y-auto max-h-[calc(100vh-100px)] pr-2">
        <h3 className="text-lg font-bold mb-4">Questions ({questions.length})</h3>
        <div className="space-y-3">
          {questions.map((q, index) => (
            <div key={q.id} className="border rounded-md p-4 space-y-2 bg-muted/30 shadow-sm">
              <p className="font-medium">
                {index + 1}. {q.question}
              </p>
              <ul className="pl-5 list-disc text-sm text-muted-foreground">
                {q.options.map((opt, idx) => (
                  <li key={idx}>{opt}</li>
                ))}
              </ul>
              <p className="text-sm mt-1">
                <strong>Answer:</strong> {q.answer}
              </p>
              <div className="flex gap-2 mt-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" variant="outline" onClick={() => setEditingQuestion(q)}>
                      <Pencil className="w-4 h-4 mr-1" /> Edit
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Question</DialogTitle>
                    </DialogHeader>
                    <Textarea
                      className="mb-3"
                      value={editingQuestion?.question || ''}
                      onChange={(e) =>
                        setEditingQuestion({ ...editingQuestion, question: e.target.value })
                      }
                    />
                    {editingQuestion?.options?.map((opt: any, idx: any) => (
                      <Input
                        key={idx}
                        className="mb-2"
                        value={opt}
                        onChange={(e) => {
                          const updatedOptions = [...editingQuestion.options];
                          updatedOptions[idx] = e.target.value;
                          setEditingQuestion({ ...editingQuestion, options: updatedOptions });
                        }}
                      />
                    ))}
                    {/* <Select
                      value={editingQuestion?.answer}
                      onValueChange={(value: any) =>
                        setEditingQuestion({ ...editingQuestion, answer: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Choose answer" />
                      </SelectTrigger>
                      <SelectContent>
                        {editingQuestion?.options?.map((opt: any, idx: any) => (
                          <SelectItem key={idx} value={opt}>
                            {opt}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select> */}
                    <DialogFooter className="mt-4">
                      <Button
                        onClick={() => {
                          setQuestions((prev) =>
                            prev.map((item) =>
                              item.id === editingQuestion.id ? editingQuestion : item
                            )
                          );
                        }}
                      >
                        Save
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Button size="sm" variant="destructive" onClick={() => handleDelete(q.id)}>
                  <Trash2 className="w-4 h-4 mr-1" /> Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
