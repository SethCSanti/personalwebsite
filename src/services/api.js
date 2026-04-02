const API_BASE = "http://localhost:3000/api";

export async function getProjects() {
  const response = await fetch(`${API_BASE}/projects`);
  return response.json();
}

export async function getWriting() {
  const response = await fetch(`${API_BASE}/writing`);
  return response.json();
}