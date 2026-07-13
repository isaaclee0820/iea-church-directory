"use client";

import { useState } from "react";
import { useChurchStore } from "@/lib/store";

export default function EditChurchProfile() {

  const { selectedChurch, updateChurch } = useChurchStore();

  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({

    pastor: "",
    pastorPhone: "",
    pastorEmail: "",
    contact: "",
    serviceTime: "",

  });


  if (!selectedChurch) {
    return null;
  }


  const church = selectedChurch;


  function openEditor() {

    setForm({

      pastor: church.pastor || "",

      pastorPhone: church.pastorPhone || "",

      pastorEmail: church.pastorEmail || "",

      contact: church.contact || "",

      serviceTime: church.serviceTime || "",

    });


    setOpen(true);

  }



  function save() {

    updateChurch({

      ...church,

      pastor: form.pastor,

      pastorPhone: form.pastorPhone,

      pastorEmail: form.pastorEmail,

      contact: form.contact,

      serviceTime: form.serviceTime,

    });


    setOpen(false);

  }



  if (!open) {

    return (

      <button

        onClick={openEditor}

        className="w-full rounded-lg bg-blue-600 px-4 py-3 text-white hover:bg-blue-700"

      >

        Edit Church Profile

      </button>

    );

  }



  return (

    <div className="space-y-4 rounded-xl border bg-white p-4">

      <h3 className="font-semibold">
        Edit Church Profile
      </h3>


      <Input
        label="Pastor"
        value={form.pastor}
        onChange={(v)=>setForm({...form,pastor:v})}
      />


      <Input
        label="Pastor Phone"
        value={form.pastorPhone}
        onChange={(v)=>setForm({...form,pastorPhone:v})}
      />


      <Input
        label="Pastor Email"
        value={form.pastorEmail}
        onChange={(v)=>setForm({...form,pastorEmail:v})}
      />


      <Input
        label="Contact"
        value={form.contact}
        onChange={(v)=>setForm({...form,contact:v})}
      />


      <Input
        label="Service Time"
        value={form.serviceTime}
        onChange={(v)=>setForm({...form,serviceTime:v})}
      />


      <button

        onClick={save}

        className="w-full rounded-lg bg-green-600 px-4 py-3 text-white"

      >

        Save

      </button>

    </div>

  );

}



function Input({

  label,

  value,

  onChange,

}: {

  label:string;

  value:string;

  onChange:(value:string)=>void;

}) {

  return (

    <div>

      <label className="mb-1 block text-sm text-gray-500">

        {label}

      </label>


      <input

        value={value}

        onChange={(e)=>onChange(e.target.value)}

        className="w-full rounded-lg border p-2"

      />

    </div>

  );

}