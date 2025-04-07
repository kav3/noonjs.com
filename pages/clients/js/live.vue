<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Live()</h1>
            <p>
                When you initialize the client with <span class="tag">{ io: false }</span>,
                it disables Socket.IO, meaning the client won't receive real-time events from the server. However,
                internal events within the client still function, allowing you to listen for and handle them without
                relying on WebSocket communication.
            </p>
            <my-shiki code='import Client from "noonjs";
const client = new Client("http://localhost:3000", { io: false }); // client without socket.io
const todo = await client.collection("todos").post({
    "title": "New Task",
    "priority": "high"
}); // no server events will be received, just local events
' />
        </section>

        <p>
            you can use the <span class="tag">live()</span> method, which re-enables Socket.IO and allows the client to
            receive real-time events from the server.
        </p>

        <my-shiki code='await client.live(); // re-enable socket.io' />

        <section class="info">
            <h4>Usage</h4>
            <p>If you have an app and want to avoid connecting all visitors—especially those on the main page—to
                Socket.IO to reduce server load, you can set <span class="tag">{ io: false }</span> when creating the
                client. Then, when the user navigates to the dashboard, you can use the <span class="tag">live()</span>
                method to establish a Socket.IO connection and receive live events.</p>
        </section>
    </span>
</template>
