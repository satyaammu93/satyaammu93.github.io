/*
 * ALL PAGE CONTENT LIVES IN THIS FILE.
 *
 * To add a publication, project, role or skill, copy an existing entry in the
 * matching list below and edit it. index.html, styles.css and app.js never need
 * to change for content edits. See README.md for field descriptions.
 *
 * Link `type` values pick the icon: "paper", "code", "demo" (anything else gets
 * a generic external-link icon).
 */
window.SITE_DATA = {
  profile: {
    name: "Satya Krishna Ammu",
    handle: "satyaammu93",
    tagline: "Materials scientist | Functional materials and devices, FEM and AI-driven discovery",
    // Path to a photo inside this repo, e.g. "assets/satya.jpg".
    // Leave empty to show the neutral initials avatar.
    photo: "assets/profile.webp",
    photoAlt: "Felt-style portrait of Satya in sunglasses and a hoodie, in front of palm trees",
    initials: "SA",
    // Spellings of my name in author lists; these get highlighted.
    authorNames: ["Satya K. Ammu", "Satya Ammu"],
    links: [
      { icon: "github",   label: "GitHub",         text: "satyaammu93",    url: "https://github.com/satyaammu93" },
      { icon: "linkedin", label: "LinkedIn",       text: "in/satyaammu",   url: "https://www.linkedin.com/in/satyaammu/" },
      { icon: "scholar",  label: "Google Scholar", text: "Google Scholar", url: "https://scholar.google.com/citations?user=9MKcu7MAAAAJ&hl=en" },
      { icon: "orcid",    label: "ORCID",          text: "0000-0001-6099-5327", url: "https://orcid.org/0000-0001-6099-5327" }
    ]
  },

  intro: {
    summary:
      "Materials scientist with 8+ years developing new functional materials and integrating them into working devices, " +
      "combining FEM modeling with hands-on fabrication and experimental testing. Next, I want to close the loop: " +
      "AI that proposes new materials, and automated experiments that make and test them.",
    bullets: [
      { icon: "🧪", text: "New materials, from synthesis to device: piezoceramics, printable inks, composites and living hydrogels." },
      { icon: "📐", text: "FEM design (COMSOL, MATLAB LiveLink, Python), validated with impedance, vibrometry and acoustics." },
      { icon: "🔊", text: "Built into functional devices: ultrasound transducers, piezoelectric metamaterials and levitating resonators." },
      { icon: "🤖", text: "Toward AI-driven discovery: generative models for crystals and Bayesian optimization to pick experiments." },
      { icon: "📫", text: "The best way to reach me is ", link: { label: "LinkedIn", url: "https://www.linkedin.com/in/satyaammu/" }, after: "." }
    ]
  },

  skills: [
    { group: "Materials & fabrication", items: ["Piezoelectric materials", "Additive manufacturing", "Cleanroom fabrication"] },
    { group: "Modeling & simulation",   items: ["COMSOL Multiphysics", "MATLAB", "FEM"] },
    { group: "Characterization",        items: ["Impedance analysis", "Laser vibrometry", "Acoustics", "Signal processing"] },
    { group: "Code & ML",               items: ["Python", "PyTorch", "Generative models", "Bayesian optimization"] }
  ],

  /*
   * Publications, shown in this order. Authors ending in "*" share first authorship.
   * thumb: 480x360 image shown beside the entry. figures: shown when "Summary" is opened.
   */
  publications: [
    {
      title: "3D Printing of Lead-Free Piezoelectric Ultrasound Transducers",
      authors: ["Satya K. Ammu", "Xianfeng Chen", "Derin Goulart Ulcay", "Saurav Sharma", "Farbod Alijani",
                "Peter G. Steeneken", "Pim Groen", "Kunal Masania"],
      venue: "Advanced Materials Technologies",
      abbr: "Adv. Mater. Technol.",
      year: 2024,
      role: "First author",
      url: "https://doi.org/10.1002/admt.202400858",
      thumb: { src: "assets/papers/admt-ldv-thumb.webp", still: "assets/papers/admt-ldv-thumb-still.webp",
               alt: "Laser-vibrometry animation of a printed piezoelectric membrane in its fundamental mode, bulging up and sagging down as one dome" },
      summary:
        "How do you keep ceramic particles dispersed long enough to print a working transducer? I synthesized Li-doped KNN " +
        "piezoceramic powder, formulated UV-curable piezocomposite inks and built a custom printer to deal with sedimentation. " +
        "I compared COMSOL models with impedance, laser-vibrometry and acoustic measurements, and demonstrated distance sensing " +
        "with the printed devices.",
      figures: [
        { src: "assets/papers/admt-process.webp",
          alt: "Printing route: piezoelectric KNLN ink and fumed-silica support ink, each UV-cured, printed into ultrasound transducers",
          caption: "Printing route: piezoelectric ink and support ink, UV-cured into transducers." },
        { src: "assets/papers/admt-vibrometry.webp",
          alt: "Laser vibrometry setup and measured displacement spectrum showing three vibration modes",
          caption: "Laser vibrometry: setup and measured vibration modes." },
        { src: "assets/papers/admt-ldv.webp", still: "assets/papers/admt-ldv-still.webp",
          alt: "Animated laser-vibrometry scan of a printed membrane at 70 kHz: the whole membrane moves up and down in phase, with the largest motion at the centre",
          caption: "Measured fundamental mode of a printed membrane at 70 kHz (laser-vibrometry scan)." },
        { src: "assets/papers/admt-sensing.webp",
          alt: "Sent and received ultrasound signals with a time delay, and measured versus actual distance on a straight line",
          caption: "Distance sensing from the time delay between sent and received signals." }
      ],
      credit: "Figures: Ammu et al., Adv. Mater. Technol. 2024, © The Authors, CC BY-NC-ND 4.0 (panels excerpted). " +
              "Animation: author's own laser-vibrometry data."
    },
    {
      title: "Piezoelectric truss metamaterials: data-driven design and additive manufacturing",
      authors: ["Saurav Sharma*", "Satya K. Ammu*", "Prakash Thakolkaran", "Jovana Jovanova", "Kunal Masania", "Siddhant Kumar"],
      venue: "npj Metamaterials",
      abbr: "npj Metamaterials",
      year: 2025,
      role: "Co-first author",
      url: "https://doi.org/10.1038/s44455-025-00009-2",
      thumb: { src: "assets/papers/npj-thumb.webp",
               alt: "Photo of a white 3D-printed piezoelectric truss lattice cube" },
      summary:
        "Can a lattice give a piezoelectric response that the bulk material cannot? Collaborators developed the machine-learning " +
        "inverse design and print-path planning; I co-led fabrication, printing Li-doped KNN ink inside a gel support bath, " +
        "and the experimental validation of the printed lattices.",
      figures: [
        { src: "assets/papers/npj-design.webp",
          alt: "Concept: a piezoelectric metamaterial, its unit cell and strut, a neural network mapping desired properties to a unit cell design",
          caption: "Machine-learning inverse design: from target properties to an optimized unit cell." },
        { src: "assets/papers/npj-printed.webp",
          alt: "Photos of three printed piezoelectric truss lattices with different unit cells, 10 mm scale bars",
          caption: "Printed piezoelectric truss lattices." }
      ],
      credit: "Figures adapted (cropped) from Sharma, Ammu et al., npj Metamaterials 2025, CC BY 4.0."
    },
    {
      title: "Diamagnetic Composites for High-Q Levitating Resonators",
      authors: ["Xianfeng Chen", "Satya K. Ammu", "Kunal Masania", "Peter G. Steeneken", "Farbod Alijani"],
      venue: "Advanced Science",
      abbr: "Adv. Sci.",
      year: 2022,
      role: "Co-author",
      url: "https://doi.org/10.1002/advs.202203619",
      thumb: { src: "assets/papers/advs-thumb.webp",
               alt: "Photo of small black graphite-epoxy plates levitating above a row of cube magnets, 3 mm scale bar" },
      summary:
        "Graphite-epoxy composite plates levitate above permanent magnets at room temperature, aimed at accelerometers. " +
        "Eddy-current damping grows with graphite particle size, so tuning the particles raises the quality factor. " +
        "I contributed COMSOL modeling and laser-vibrometry measurements.",
      figures: [
        { src: "assets/papers/advs-figure.webp",
          alt: "Diamagnetic levitation schematic, eddy currents in graphite particles, levitating plates on magnets, and microscopy of the composite",
          caption: "Levitating graphite-epoxy plates and the particle-size effect on eddy-current damping." }
      ],
      credit: "Figure adapted (cropped) from Chen, Ammu et al., Adv. Sci. 2022, CC BY 4.0."
    },
    {
      title: "Growth, Distribution, and Photosynthesis of Chlamydomonas reinhardtii in 3D Hydrogels",
      authors: ["Jeong-Joo Oh", "Satya Ammu", "Vivian Dorine Vriend", "Roland Kieffer", "Friedrich Hans Kleiner",
                "Srikkanth Balasubramanian", "Elvin Karana", "Kunal Masania", "Marie-Eve Aubin-Tam"],
      venue: "Advanced Materials",
      abbr: "Adv. Mater.",
      year: 2024,
      role: "Co-author",
      url: "https://doi.org/10.1002/adma.202305505",
      thumb: { src: "assets/papers/adma-thumb.webp",
               alt: "Photo of a green 3D-printed hydrogel succulent containing living microalgae" },
      summary:
        "How do living microalgae grow, spread and photosynthesize inside 3D-printed hydrogels? I developed the printable " +
        "alginate ink carrying Chlamydomonas reinhardtii, characterized its rheology, including how calcium crosslinking " +
        "stiffens it, and printed the structures, from test geometries to plant-like shapes with different surface-to-volume ratios.",
      figures: [
        { src: "assets/papers/adma-shapes.webp",
          alt: "Photos of green printed hydrogels shaped as a clover, seaweed, cactus and succulent, 1 cm scale bars",
          caption: "Living hydrogels printed as a clover, seaweed, cactus and succulent." },
        { src: "assets/papers/adma-rheology.webp",
          alt: "Calcium crosslinking of sodium alginate, and storage and loss moduli rising with calcium chloride concentration and crosslinking time",
          caption: "Ink rheology: calcium crosslinking stiffens the alginate ink." }
      ],
      credit: "Figures from Oh, Ammu et al., Adv. Mater. 2024, © 2023 Wiley-VCH GmbH. Reused by the author with attribution."
    }
  ],
  publicationsMore: { label: "All publications on Google Scholar", url: "https://scholar.google.com/citations?user=9MKcu7MAAAAJ&hl=en" },

  projects: [
    {
      title: "FlowMM reproduction",
      status: "Reproduction",
      description:
        "Reproduced published flow-matching experiments for crystal structure prediction on a single RTX 3060, " +
        "matching the paper's perovskite benchmark, and visualized how atom types emerge during generation.",
      credit: { text: "Method: FlowMM, Miller et al., ICML 2024", url: "https://arxiv.org/abs/2406.04713" },
      kind: { label: "Python", color: "#3572A5" },
      links: [{ type: "code", label: "Code", url: "https://github.com/satyaammu93/flowmm-reproduced" }]
    },
    {
      title: "InvDesAL implementation",
      status: "Generator stage",
      description:
        "Rebuilt the crystal-generator stage of InvDesFlow-AL from the paper: a PyTorch diffusion model with an " +
        "equivariant graph denoiser, trained on Alex-MP-20 and GNoME data. The repo logs how I traced and fixed its sampling failures.",
      credit: { text: "Method: InvDesFlow-AL, Han et al., npj Comput. Mater. 2025", url: "https://doi.org/10.1038/s41524-025-01830-z" },
      kind: { label: "Python", color: "#3572A5" },
      links: [{ type: "code", label: "Code", url: "https://github.com/satyaammu93/InvDesAL-Implementation" }]
    },
    {
      title: "Bayesian optimization tutorials",
      status: "Ongoing",
      description:
        "A learning project implementing and comparing Gaussian-process and tree-model surrogates, bootstrap " +
        "uncertainty and acquisition strategies on a known test function: a numerical step before choosing real experiments.",
      kind: { label: "Python", color: "#3572A5" },
      links: [{ type: "code", label: "Code", url: "https://github.com/satyaammu93/bayesian-optimization-tutorials" }]
    },
    {
      title: "Tempo: protocol-emulator ASIC",
      status: "Design, not fabricated",
      description:
        "Open-source programmable chip design for Jane Street's ASIC competition that runs UART, SPI and I²C as firmware. " +
        "Verified in simulation and formal checks; FPGA and silicon testing are future work.",
      kind: { label: "Verilog", color: "#b2b7f8" },
      links: [
        { type: "code", label: "Code", url: "https://github.com/satyaammu93/jane-street-asic-2026" },
        { type: "demo", label: "Demo", url: "https://satyaammu93.github.io/jane-street-asic-2026/tempo.html" }
      ]
    }
  ],

  experience: [
    { period: "2025 – present", role: "Ultrasound Scientist", org: "TNO",
      text: "Ultrasound transducers for semiconductor and medical applications: design, FEM modeling and testing." },
    { period: "2024 – 2025", role: "Materials Scientist", org: "Qlayers",
      text: "Surface treatment and adhesion for robotic coating." },
    { period: "2020 – 2024", role: "PhD Researcher", org: "TU Delft",
      text: "Lead-free piezoelectric transducers, from synthesis to working devices." },
    { period: "2018 – 2020", role: "Researcher", org: "TU Delft",
      text: "Thin-film and screen-printed piezoelectric devices, cleanroom fabrication." }
  ],

  education: [
    { year: "2025", degree: "PhD, Aerospace Engineering (Structures and Materials)", org: "TU Delft" },
    { year: "2018", degree: "MSc, Aerospace Engineering", org: "TU Delft" },
    { year: "2014", degree: "BE, Mechanical Engineering", org: "RV College of Engineering" }
  ]
};
