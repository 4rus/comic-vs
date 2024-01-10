AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "alex-scumborg",
        title: "Alex Scumborg",
        url: "./assets/thumbnails/Alex_Scumborg.jpg",
      },
      {
        id: "Captain Marvel",
        title: "Captain Marvel",
        url: "./assets/thumbnails/captain_marvel.jpg",
      },

      {
        id: "wonder comics",
        title: "Wonder Comic",
        url: "./assets/thumbnails/Wonder_Comics.jpg",
      },
      {
        id: "Superman",
        title: "Superman",
        url: "./assets/thumbnails/superman.jpg",
      },
    ];

    let previousXposition = -60
    for (var item of thumbNailsRef) {

      const posX = previousXposition + 25 // -60+25 = x
      const posY = 10
      const posZ = -40

      const position = { x: posX, y: posY, z: posZ }
      previousXposition = posX

      // Border Element
      const borderEl = this.createBorder(position, item.id);
      // Thumbnail Element
      const thumbNail = this.createThumbnail(item);
      borderEl.appendChild(thumbNail);
      // Title Text Element
      const titleEl = this.createTitleEl(position, item);
      borderEl.appendChild(titleEl);
      this.placesContainer.appendChild(borderEl);
    }
  },
  createTitleEl: function(position, item){
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 60,
      color: "black",
      value: item.title
    });
    const elPosition = position;
    elPosition.y = -20;
    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);
    return entityEl;
  },
  createBorder: function (position, id) {
    var entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "ring",
      radiusInner: 9,
      radiusOuter: 10
    })
    entityEl.setAttribute("material", {
      color: "white",
      opacity: 0.4
    })
    return entityEl;
  },
  createThumbnail: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true)
    entityEl.setAttribute("geometry", {
      primitive: "circle",
      radius: 9
    });
    entityEl.setAttribute("material", {
      src: item.url
    });
    return entityEl;
  }
});
