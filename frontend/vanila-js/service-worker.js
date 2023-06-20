self.addEventListener("install", (event) => {
  console.log("install");
});

self.addEventListener("activate", (event) => {
  console.log("activate");
});

self.addEventListener("sync", (event) => {
  console.log("sync");
  console.log(event);
});

self.addEventListener("push", (event) => {
  const options = {
    body: event.data.text(),
    icon: "",
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "2",
    },
    actions: [
      {
        action: "explore",
        title: "Explore this new world",
        icon: "",
      },
      {
        action: "close",
        title: "Close",
        icon: "",
      },
    ],
  };

  event.waitUntil(self.registration.showNotification("hello", options));
});
