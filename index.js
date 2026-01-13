const list = document.getElementById("list");

async function fetchData() {
  const response = await fetch("http://localhost:8000/");
  const data = await response.json();

  // console.log(data)
  await data.posts.map((e) => {
    list.innerHTML += ` 
                        <li>
                            Title: ${e.title}<br>
                            Content: ${e.content}<br>
                            Author: ${e.author}
                        </li>`;
  });
}

fetchData();
