import "./carousel.css";

export const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="carouselimg"
              src="/assets/z pattern/01 La masa/masa2.png"
              alt="masa2"
            ></img>
          </div>
          <div class="carousel-item">
            <img
              class="carouselimg"
              src="/assets/z pattern/02 El tomate/tomate2.jpg"
              alt="tomate2"
            ></img>
          </div>
          <div class="carousel-item">
            <img
              class="carouselimg"
              src="/assets/z pattern/03 la mozzarella/lamuzza2.jpg"
              alt="muzza3"
            ></img>
          </div>
          <div class="carousel-item">
            <img
              class="carouselimg"
              src="/assets/z pattern/04 Los ingredientes/ingredientes3.jpg"
              alt="ingredientes3"
            ></img>
          </div>
          <div class="carousel-item">
            <img
              class="carouselimg"
              src="/assets/z pattern/04 Los ingredientes/ingredientes4.jpg"
              alt="ingredientes4"
            ></img>
          </div>
          <div class="carousel-item">
            <img
              class="carouselimg"
              src="/assets/z pattern/01 La masa/masa1.png"
              alt="masa1"
            ></img>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};