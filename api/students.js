let students = [
  { id: 1, name: 'Aarav' },
  { id: 2, name: 'Isha' },
  { id: 3, name: 'Kabir' }
];

export default async function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(students);
  }

  else if (req.method === 'POST') {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: 'Name is required' });

    const newStudent = { id: Date.now(), name };
    students.push(newStudent);
    res.status(201).json(newStudent);
  }

  else if (req.method === 'DELETE') {
    const { id } = req.body;
    students = students.filter(s => s.id !== id);
    res.status(200).json({ message: 'Student removed' });
  }

  else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
