// context/students-reducer.ts
import { Student, STUDENTS } from "../data/students";

// ── State shape ─────────────────────────────────────────
export type StudentsState = Student[];

// ── Action union type ────────────────────────────────────
export type StudentsAction =
  | { type: "ADD_STUDENT"; payload: Student }
  | { type: "REMOVE_STUDENT"; payload: string } // payload = student id
  | { type: "RESET" };

// ── Reducer function ─────────────────────────────────────
export function studentsReducer(
  state: StudentsState,
  action: StudentsAction,
): StudentsState {
  switch (action.type) {
    case "ADD_STUDENT":
      return [action.payload, ...state]; // Prepend new student

    case "REMOVE_STUDENT":
      return state.filter((s) => s.id !== action.payload);

    case "RESET":
      return STUDENTS;

    default:
      return state;
  }
}
