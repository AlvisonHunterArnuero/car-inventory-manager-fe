import React, { useState } from "react";
import {
  Button, Dialog, DialogTitle, DialogContent,
  DialogActions, TextField, Stack
} from "@mui/material";

interface AddCarFormProps {
  onAdd: (car: any) => void;
}

export function AddCarForm({ onAdd }: AddCarFormProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    make: "", model: "", year: "", color: "",
    mobile: "https://via.placeholder.com/300x200?text=Mobile",
    tablet: "https://via.placeholder.com/900x400?text=Tablet",
    desktop: "https://via.placeholder.com/1200x600?text=Desktop",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(formData);
    setOpen(false);
    setFormData({ make: "", model: "", year: "", color: "", mobile: "", tablet: "", desktop: "" });
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Add New Car
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <DialogTitle>Add a New Car</DialogTitle>
          <DialogContent>
            <Stack spacing={2} sx={{ mt: 1 }}>
              <TextField label="Make" fullWidth required value={formData.make}
                onChange={(e) => setFormData({...formData, make: e.target.value})} />
              <TextField label="Model" fullWidth required value={formData.model}
                onChange={(e) => setFormData({...formData, model: e.target.value})} />
              <TextField label="Year" type="number" fullWidth required value={formData.year}
                onChange={(e) => setFormData({...formData, year: e.target.value})} />
              <TextField label="Color" fullWidth required value={formData.color}
                onChange={(e) => setFormData({...formData, color: e.target.value})} />
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="submit" variant="contained">Create</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}