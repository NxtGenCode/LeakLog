export interface Job {
  id: number;
  customerName: string;
  address: string;
  phone: string;
  leakType: 'Structural' | 'Pipe';
  notes: string;
}