async function getDogsList() {
  const res = await fetch("http://localhost:3000/dogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "yoav", age: 35 }),
  });
}

getDogsList();
