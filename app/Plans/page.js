function Plans() {
  return ( <>
  <head>
  <link rel="stylesheet" href="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"/>
    <script src="	https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  </head>
   <section id="pricing">
    <div class="container">
      <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h2 class="display-4 fw-normal">A plan better than chatGpt and openai</h2>
        <p class="fs-5 text-body-secondary">Simple and affordable price plans for your better work</p>
      </div>
      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm ">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">Basic</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">$0<small class="text-body-secondary fw-light">/mo</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>5 Matches Per Day</li>
                <li>10 Messages Per Day</li>
                <li>Unlimited App Usage</li>
              </ul>
              <form action="/sign-up" method="post">
              <button type="submit" class="w-100 btn btn-lg btn-outline-dark">Sign up for free</button>
            </form>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">Medium</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">100<small class="text-body-secondary fw-light">/mo</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>Unlimited Matches</li>
                <li>Unlimited Messages</li>
                <li>Unlimited App Usage</li>
              </ul>
              <form action="/pay" method="get">
              <button type="submit" class="w-100 btn btn-lg btn-dark">Get started</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm border-dark">
            <div class="card-header py-3 text-bg-dark border-dark">
              <h4 class="my-0 fw-normal">Advance</h4>
            </div>
            <div class="card-body">
              <h1 class="card-title pricing-card-title">300<small class="text-body-secondary fw-light">/mo</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>Pirority Listing</li>
                <li>Unlimited Matches & Messages</li>
                <li>Unlimited App Usage</li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-dark">Contact us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- Footer --> */}
  <section id="contact" class="gradient-background">
    <div class="container ">
      <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 mt-5 border-top">
        <div class="col mb-3">

          <p class="text-body-secondary">© Tindog</p>
        </div>

        <div class="col mb-3">

        </div>

        <div class="col mb-3">
          <h5>Section</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>

        <div class="col mb-3">
          <h5>Section</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>

        <div class="col mb-3">
          <h5>Section</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>
      </footer>
    </div>
  </section>
  </> );
}

export default Plans;