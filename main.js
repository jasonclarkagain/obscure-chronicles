document.addEventListener("DOMContentLoaded", () => {
    console.log("Archives Initialized.");
    const feed = document.getElementById("chronicle-feed");

    // PASTE YOUR REAL DATA ARRAY OR FETCH LOGIC HERE
    const archives = [
        { title: "Entry 001", content: "Data recovered from SSD..." },
        { title: "Entry 002", content: "Media server interference cleared." }
    ];

    // THIS RENDERS THE DATA TO THE SCREEN
    feed.innerHTML = archives.map(entry => `
        <div class="archive-card">
            <h3>${entry.title}</h3>
            <p>${entry.content}</p>
        </div>
    `).join('');
});
