import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

const defaultCohorts = [
  { id: 1, name: 'Nomands Alpha', description: 'Frontend beginner cohort', instructor: 'Jane Doe', students: 25, modules: ['Intro', 'Components'] },
  { id: 2, name: 'Nomands Beta', description: 'Advanced React', instructor: 'John Smith', students: 32, modules: ['State', 'Props'] },
  { id: 3, name: 'Nomands Gamma', description: 'UI/UX Group', instructor: 'Alice Grey', students: 18, modules: [] },
];

export default function CohortsPage() {
  const [cohorts, setCohorts] = useState(defaultCohorts);
  const [newCohortName, setNewCohortName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newInstructor, setNewInstructor] = useState('');

  const handleAddCohort = () => {
    if (newCohortName.trim() !== '') {
      const newCohort = {
        id: cohorts.length + 1,
        name: newCohortName,
        description: newDescription,
        instructor: newInstructor,
        students: 0,
        modules: [],
      };
      setCohorts([...cohorts, newCohort]);
      setNewCohortName('');
      setNewDescription('');
      setNewInstructor('');
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Cohorts Management ({cohorts.length})</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Add New Cohort</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Cohort</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-2">
              <Input
                placeholder="Enter cohort name"
                value={newCohortName}
                onChange={(e) => setNewCohortName(e.target.value)}
              />
              <Input
                placeholder="Enter cohort description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
              <Input
                placeholder="Enter instructor name"
                value={newInstructor}
                onChange={(e) => setNewInstructor(e.target.value)}
              />
            </div>
            <DialogFooter className="mt-4">
              <Button onClick={handleAddCohort}>Add</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Students</TableHead>
              <TableHead>Modules</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cohorts.map((cohort) => (
              <TableRow key={cohort.id}>
                <TableCell>{cohort.id}</TableCell>
                <TableCell>{cohort.name}</TableCell>
                <TableCell>{cohort.students}</TableCell>
                <TableCell>{cohort.modules.length}</TableCell>
                <TableCell>
                  <Button size="sm" variant="outline">Manage</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
