// sticky header
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-90px";
    }
}

// carousel items auto change
var myCarousel = document.querySelector('#carouselExampleControlsNoTouching');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
});

// static content & description
// Creative Design
function creativeDesign(){document.getElementById("changevalue").innerHTML='<div class="col-lg-7 col-md-12"><div><h2>Creative Design</h2></div><div class="my-4"><p>Here’s where your website begins to come to life, as our award-winning designers step in. Your design is filled with color and custom elements as we incorporate your brand’s personality and tailor the user journey to your target market.</p></div><div class="d-flex"><div class="me-3"><i class="fa-solid fa-angles-right"></i></div><div><p>Design your custom website</p></div></div><div class="d-flex"><div class="me-3"><i class="fa-solid fa-angles-right"></i></div><div><p>Incorporate your unique branding elements</p></div></div><div class="d-flex"><div class="me-3"><i class="fa-solid fa-angles-right"></i></div><div><p>Present you with full-scale designs in Figma</p></div></div></div><div class="col-lg-5 col-md-12 text-center"><img class="img-fluid" src="./Image/creative-design.png" alt="Creative Design"></div>';}
// Web Strategy
function webStrategy(){document.getElementById("changevalue").innerHTML='<div class="col-lg-7 col-md-12"><div><h2>Web Strategy</h2></div><div class="my-4"><p>Before we put pen to paper (or start on your digital design, rather), we conduct thorough research into your industry, competitors and target market to gather insights that will inform your custom digital strategy.</p></div><div class="my-4"><p>In this phase, we:</p></div><div class="d-flex"><div class="me-3"><i class="fa-solid fa-angles-right"></i></div><div><p>Identify the ideal positioning for your brand</p></div></div><div class="d-flex"><div class="me-3"><i class="fa-solid fa-angles-right"></i></div><div><p>Collect target audience data and create user personas</p></div></div><div class="d-flex"><div class="me-3"><i class="fa-solid fa-angles-right"></i></div><div><p>Define valuable content and marketing channels</p></div></div><div class="d-flex"><div class="me-3"><i class="fa-solid fa-angles-right"></i></div><div><p>Define KPIs to measure performance</p></div></div></div><div class="col-lg-5 col-md-12 text-center"><img class="img-fluid" src="./Image/web-strategy.png" alt=""></div>';}
// Responsive Developement
function responsiveDev() { document.getElementById("changevalue").innerHTML = '<div class="col-lg-7 col-md-12"><div><h2>Responsive Development</h2></div><div class="my-4"><p>In the development phase, our expert development team works behind the scenes to build a custom, secure and scalable solution for your brand, on your chosen platform. From B2B to eCommerce, we ensure clean code and a website that’s fully optimized.</p></div><div class="my-4"><p>In this phase, we:</p></div><div class="d-flex"><div class="me-3"><i class="fa-solid fa-angles-right"></i></div><div><p>Write and finalize coding for your website</p></div></div><div class="d-flex"><div class="me-3"><i class="fa-solid fa-angles-right"></i></div><div><p>Bring your custom solution to life in a secure staging site</p></div></div><div class="d-flex"><div class="me-3"><i class="fa-solid fa-angles-right"></i></div><div><p>Ensure a responsive solution for both desktop and mobile</p></div></div></div><div class="col-lg-5 col-md-12 text-center"><img class="img-fluid" src="./Image/developement.png" alt=""></div>'; }
// Quality Assurance
function qualityAssurance() { document.getElementById("changevalue").innerHTML = `<div class="col-lg-7 col-md-12"><div><h2>Quality Assurance (QA)</h2></div><div class="my-4"><p>Before we push your custom solution live for the world to see, we follow a stringent quality assurance process, leaving no stone unturned. We continuously test your site’s speed, functionality and other key elements to make sure it’s ready for launch.</p></div><div class="my-4"><p>In this phase, we:</p></div><div class="d-flex"><div class="me-3"><i class="fa-solid fa-angles-right"></i></div><div><p>Perform meticulously testing across the frontend and backend</p></div></div><div class="d-flex"><div class="me-3"><i class="fa-solid fa-angles-right"></i></div><div><p>Ensure all features and functionalities are working as intended</p></div></div><div class="d-flex"><div class="me-3"><i class="fa-solid fa-angles-right"></i></div><div><p>Make changes as needed to ensure a superior user experience</p></div></div></div><div class="col-lg-5 col-md-12 text-center"><img class="img-fluid" src="./Image/quality.png" alt="Quality Assurance"></div>`; }
// Lounch & Optimization
function lounchOptimization() { document.getElementById("changevalue").innerHTML = `<div class="col-lg-7 col-md-12"><div><h2>Launch & Optimization</h2></div><div class="my-4"><p>When our QA is complete, it’s time for launch! Our team will set up your server, carry out the DNS configuration and make sure all updates are finalized. We’ll provide Cloudflare security protection, along with both internal and external monitoring.</p></div><div class="my-4"><p>In this phase, we:</p></div><div class="d-flex"><div class="me-3"><i class="fa-solid fa-angles-right"></i></div><div><p>Perform final QA testing</p></div></div><div class="d-flex"><div class="me-3"><i class="fa-solid fa-angles-right"></i></div><div><p>Devise a marketing plan for launch</p></div></div><div class="d-flex"><div class="me-3"><i class="fa-solid fa-angles-right"></i></div><div><p>Push your new digital solution live</p></div></div></div><div class="col-lg-5 col-md-12 text-center"><img class="img-fluid" src="./Image/optimization.png" alt="Launch & Optimization"></div>`; }
// Planning & Information
function planningInformation(){document.getElementById("changevalue").innerHTML='<div class="col-lg-7 col-md-12"><div><h2>Planning & Information</h2></div><div class="my-4"><p>Next, we map out your unique landing pages and define your site map and navigation. We create a plan for your URL structure, along with redirects and a search engine optimization strategy, careful to maintain any existing SEO value from your current site, if applicable.</p></div><div class="my-4"><p>In this phase, we:</p></div><div class="d-flex"><div class="me-3"><i class="fa-solid fa-angles-right"></i></div><div><p>Design your site structure, navigation and page hierarchy</p></div></div><div class="d-flex"><div class="me-3"><i class="fa-solid fa-angles-right"></i></div><div><p>Map out the conversion funnel for each unique landing page</p></div></div><div class="d-flex"><div class="me-3"><i class="fa-solid fa-angles-right"></i></div><div><p>Create black to show you the bones of your new site</p></div></div></div><div class="col-lg-5 col-md-12 text-center"><img class="img-fluid" src="../Image/planning.png" alt=""></div>';}


// Best Website Agency Showmore and Hide Article Functions

function showTable() {
    document.getElementById("table-content").style.display = 'block';
    document.getElementById("showtitle").style.display = 'none';
}

function hideTable() {
    document.getElementById("table-content").style.display = 'none';
    document.getElementById("showtitle").style.display ='block';
}



