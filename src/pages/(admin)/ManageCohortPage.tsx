


'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { MoreVertical } from 'lucide-react';
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

export default function ManageCohortPage() {
  const [cohort, setCohort] = useState({
    id: 1,
    name: 'Nomands Alpha',
    description: 'Frontend beginner cohort',
    instructor: 'Jane Doe',
    visible: true,
  });

  const [editing, setEditing] = useState({
    name: cohort.name,
    description: cohort.description,
    instructor: cohort.instructor,
    visible: cohort.visible,
  });

  const [modules, setModules] = useState([
    {
      id: 1,
      name: 'Intro to HTML',
      description: 'Basics of HTML structure',
      visible: true,
      examTime: '',
      markPerQuestion: '',
      passcode: '',
    },
    {
      id: 2,
      name: 'CSS Flexbox',
      description: 'Learn layout with flexbox',
      visible: false,
      examTime: '',
      markPerQuestion: '',
      passcode: '',
      },
      {
        id: 2,
        name: 'CSS Flexbox',
        description: 'Learn layout with flexbox',
        visible: false,
        examTime: '',
        markPerQuestion: '',
        passcode: '',
      },
      {
        id: 2,
        name: 'CSS Flexbox',
        description: 'Learn layout with flexbox',
        visible: false,
        examTime: '',
        markPerQuestion: '',
        passcode: '',
      },
      {
        id: 2,
        name: 'CSS Flexbox',
        description: 'Learn layout with flexbox',
        visible: false,
        examTime: '',
        markPerQuestion: '',
        passcode: '',
      },
      {
        id: 2,
        name: 'CSS Flexbox',
        description: 'Learn layout with flexbox',
        visible: false,
        examTime: '',
        markPerQuestion: '',
        passcode: '',
      },
  ]);

  const [newModule, setNewModule] = useState({ name: '', description: '' });
  const [selectedModule, setSelectedModule] = useState<any>(null);

  const handleUpdateCohort = () => {
    setCohort({ ...cohort, ...editing });
  };

  const handleDeleteCohort = () => {
    alert('Cohort deleted');
  };

  const handleAddModule = () => {
    if (newModule.name.trim() !== '') {
      const newMod = {
        id: modules.length + 1,
        ...newModule,
        visible: true,
        examTime: '',
        markPerQuestion: '',
        passcode: '',
      };
      setModules([...modules, newMod]);
      setNewModule({ name: '', description: '' });
    }
  };

  const handleUpdateModule = (updatedModule:any) => {
    setModules(modules.map(mod => mod.id === updatedModule.id ? updatedModule : mod));
    setSelectedModule(null);
  };

  const handleDeleteModule = (id:any) => {
    setModules(modules.filter(mod => mod.id !== id));
  };

  return (
    <div className="p-6 space-y-8">
      {/* === COHORT HEADER === */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold">{cohort.name}</h2>
          <p className="text-muted-foreground">{cohort.description}</p>
          <p className="text-sm mt-1">Instructor: <span className="font-medium">{cohort.instructor}</span></p>
        </div>

        {/* === Cohort Settings Modal === */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Settings</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Cohort</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Input
                value={editing.name}
                placeholder="Cohort name"
                onChange={(e) => setEditing({ ...editing, name: e.target.value })}
              />
              <Textarea
                value={editing.description}
                placeholder="Cohort description"
                onChange={(e) => setEditing({ ...editing, description: e.target.value })}
              />
              <Input
                value={editing.instructor}
                placeholder="Instructor"
                onChange={(e) => setEditing({ ...editing, instructor: e.target.value })}
              />
              <div className="flex items-center gap-2">
                <Switch
                  checked={editing.visible}
                  onCheckedChange={(val) => setEditing({ ...editing, visible: val })}
                />
                <Label>Visible</Label>
              </div>
            </div>
            <DialogFooter className="mt-4 flex justify-between">
              <Button variant="destructive" onClick={handleDeleteCohort}>Delete Cohort</Button>
              <Button onClick={handleUpdateCohort}>Save</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* === MODULES === */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Modules ({modules.length})</h3>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Add Module</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create Module</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Input
                  placeholder="Module name"
                  value={newModule.name}
                  onChange={(e) => setNewModule({ ...newModule, name: e.target.value })}
                />
                <Textarea
                  placeholder="Module description"
                  value={newModule.description}
                  onChange={(e) => setNewModule({ ...newModule, description: e.target.value })}
                />
              </div>
              <DialogFooter className="mt-4">
                <Button onClick={handleAddModule}>Add</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="space-y-2 grid grid-cols-2 gap-3">
          {modules.map((mod, i) => (
            <div key={mod.id} className="border p-4 rounded-lg flex justify-between items-center">
              <div>
                <p className="font-medium">{i + 1}. {mod.name}</p>
                <p className="text-sm text-muted-foreground">{mod.description}</p>
                <p className="text-xs mt-1">
                  Status: <span className={mod.visible ? 'text-green-500' : 'text-red-500'}>
                    {mod.visible ? 'Visible' : 'Hidden'}
                  </span>
                </p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setSelectedModule(mod)}>Manage Module</DropdownMenuItem>
                  <DropdownMenuItem>Questions</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </div>
      </div>

      {/* === Manage Module Modal === */}
      <Dialog open={!!selectedModule} onOpenChange={() => setSelectedModule(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Manage Module</DialogTitle>
          </DialogHeader>
          {selectedModule && (
            <div className="space-y-4">
              <Input
                placeholder="Module Name"
                value={selectedModule.name}
                onChange={(e) =>
                  setSelectedModule({ ...selectedModule, name: e.target.value })
                }
              />
              <Textarea
                placeholder="Description"
                value={selectedModule.description}
                onChange={(e) =>
                  setSelectedModule({ ...selectedModule, description: e.target.value })
                }
              />
              <Input
                placeholder="Exam Time (mins)"
                value={selectedModule.examTime}
                onChange={(e) =>
                  setSelectedModule({ ...selectedModule, examTime: e.target.value })
                }
              />
              <Input
                placeholder="Mark Per Question"
                value={selectedModule.markPerQuestion}
                onChange={(e) =>
                  setSelectedModule({ ...selectedModule, markPerQuestion: e.target.value })
                }
              />
              <Input
                placeholder="Module Passcode"
                value={selectedModule.passcode}
                onChange={(e) =>
                  setSelectedModule({ ...selectedModule, passcode: e.target.value })
                }
              />
              <div className="flex items-center gap-2">
                <Switch
                  checked={selectedModule.visible}
                  onCheckedChange={(val) =>
                    setSelectedModule({ ...selectedModule, visible: val })
                  }
                />
                <Label>Visible</Label>
              </div>
              <DialogFooter className="mt-4 flex justify-between">
                <Button
                  variant="destructive"
                  onClick={() => {
                    handleDeleteModule(selectedModule.id);
                    setSelectedModule(null);
                  }}
                >
                  Delete Module
                </Button>
                <Button onClick={() => handleUpdateModule(selectedModule)}>Save</Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
