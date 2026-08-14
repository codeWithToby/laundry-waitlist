"use client";

import { useState, type FormEvent } from "react";
import { supabase } from "@/lib/supabase";

type Role = "student" | "staff" | "lecturer";

const ROLES: { value: Role; label: string }[] = [
  { value: "student", label: "Student" },
  { value: "staff", label: "Staff" },
  { value: "lecturer", label: "Lecturer" },
];

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role | null>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!role) {
      setStatus("error");
      setErrorMessage("Pick student, staff, or lecturer so we know who's asking.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const { error } = await supabase
      .from("waitlist_signups")
      .insert({ email: email.trim().toLowerCase(), role });

    if (error) {
      setStatus("error");
      setErrorMessage(
        error.code === "23505"
          ? "That email's already on the list — you're in!"
          : "Something went wrong. Try again in a moment."
      );
      return;
    }

    setStatus("done");
  }

  if (status === "done") {
    return (
      <div className="w-full rounded-2xl bg-emerald-50 border border-emerald-200 px-6 py-8 text-center">
        <p className="text-lg font-semibold text-emerald-900">You&apos;re on the list 🎉</p>
        <p className="mt-1 text-sm text-emerald-700">
          We&apos;ll email you the moment pickup launches on your campus.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="grid grid-cols-3 gap-2">
        {ROLES.map((r) => (
          <button
            key={r.value}
            type="button"
            onClick={() => setRole(r.value)}
            aria-pressed={role === r.value}
            className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors ${
              role === r.value
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-gray-300 bg-white text-gray-700 active:bg-gray-50"
            }`}
          >
            {r.label}
          </button>
        ))}
      </div>

      <input
        type="email"
        required
        placeholder="you@university.edu"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-xl border border-gray-300 px-4 py-3.5 text-base text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
      />

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-xl bg-blue-600 px-4 py-3.5 text-base font-semibold text-white transition-colors active:bg-blue-700 disabled:opacity-60"
      >
        {status === "submitting" ? "Joining..." : "Join the Waitlist"}
      </button>

      <p className="text-center text-xs text-gray-400">
        No spam. Just one email when we launch on your campus.
      </p>
    </form>
  );
}
