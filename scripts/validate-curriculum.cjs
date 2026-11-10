const fs = require("node:fs");
const vm = require("node:vm");
const source = fs.readFileSync("curriculum.js", "utf8");
const sandbox = { window: {} };
vm.runInNewContext(source, sandbox, { timeout: 3000 });
const tracks = sandbox.window.CURRICULUM;
if (!Array.isArray(tracks) || tracks.length !== 17) throw new Error("Expected 17 curriculum tracks");
const ids = new Set();
for (const track of tracks) {
  if (!track.id || ids.has(track.id)) throw new Error("Missing or duplicate track id: " + track.id);
  ids.add(track.id);
  if (!Array.isArray(track.questions) || track.questions.length !== 10) throw new Error(track.id + ": expected 10 questions");
  if (!Array.isArray(track.incidents) || track.incidents.length !== 5) throw new Error(track.id + ": expected 5 incidents");
  if (!track.lab || !Array.isArray(track.lab.tasks) || track.lab.tasks.length < 1) throw new Error(track.id + ": missing lab tasks");
  for (const q of track.questions) if (!Array.isArray(q) || q.length < 4 || q.some(x => typeof x !== "string")) throw new Error(track.id + ": malformed question");
  for (const incident of track.incidents) if (!Array.isArray(incident) || incident.length < 5) throw new Error(track.id + ": malformed incident");
}
console.log("Validated " + tracks.length + " tracks, " + tracks.reduce((n,t)=>n+t.questions.length,0) + " questions, " + tracks.reduce((n,t)=>n+t.incidents.length,0) + " incidents.");
