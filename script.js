function ReadElement(selector) {
    return document.querySelector(selector);
  }

  const menu = ReadElement('#menu-image');
  const nav = ReadElement('.mobile-nav');
  const closeNav = ReadElement('.cross');
  const take = ReadElement('mobile-nav-ul');

  function addMenu(selected, modalPart, opener) {
    return selected.addEventListener('click', () => {
      modalPart.classList.add(opener);
      modalPart.style.top = '0px';
    });
  }

  function removeMenu(selected, modalPart, remover) {
    return selected.addEventListener('click', () => modalPart.classList.remove(remover));
  }

  addMenu(menu, nav, 'nav-toggle');
  removeMenu(closeNav, nav, 'nav-toggle');
  removeMenu(take, nav, 'nav-toggle');

  const speakers = [
    {
      name: 'Billie Eilish',
      about: 'A singer-songwriter and television personality.',
      quote: 'Rhythm and Harmony find their way into the inward places of the soul.',
      picture: 'assets/Billie.png',
    },
    {
      name: 'GiveOn',
      about: 'A singer-songwriter and television personality.',
      quote: 'Rhythm and Harmony find their way into the inward places of the soul.',
      picture: 'assets/Giveon.png',
    },
    {
      name: 'Nasty C',
      about: 'A singer-songwriter and television personality.',
      quote: 'Rhythm and Harmony find their way into the inward places of the soul.',
      picture: 'assets/NastyC.png',
    },
    {
      name: 'Uncle Waffles',
      about: 'A singer-songwriter and television personality.',
      quote: 'Rhythm and Harmony find their way into the inward places of the soul.',
      picture: 'assets/Waffles.png',
    },
    {
      name: 'Meghan Trainor',
      about: 'A singer-songwriter and television personality.',
      quote: 'Rhythm and Harmony find their way into the inward places of the soul.',
      picture: 'assets/Meghan.png',
    },
    {
      name: 'Kgololo Polelo',
      about: 'A singer-songwriter and television personality.',
      quote: 'Rhythm and Harmony find their way into the inward places of the soul.',
      picture: 'assets/Kgololo.png',
    },
  ];

  document.querySelector('.carry-speaker').innerHTML = speakers.map((speak) => `
  <article  class="col-12 col-md-6 speaker-card mt-4">
    <div class="image-holder">
        <img src=${speak.picture} width="120" height="90%" alt="speaker 1">
    </div>
    <div class="speaker-info pl-4 pt-4">
        <h4 class="speaker-name">${speak.name}</h4>
        <i class="speaker-about">${speak.about}</i>
        <hr class="line-breaker">
        <p class="speaker-quote">${speak.quote}</p>
    </div>
  </article >`).join('');

  const myPrograms = [
    {
      title: 'Director',
      description: 'People love and respect musicians because music has the power to evoke emotions and connect with people on a deep level.',
      image: 'assets/Lecture.png',
    },
    {
      title: 'Exhibition',
      description: 'People love and respect musicians because music has the power to evoke emotions and connect with people on a deep level.',
      image: 'assets/CCExhibition.png',
    },
    {
      title: 'Forum',
      description: 'People love and respect musicians because music has the power to evoke emotions and connect with people on a deep level.',
      image: 'assets/Forum.png',
    },
    {
      title: 'Workshop',
      description: 'People love and respect musicians because music has the power to evoke emotions and connect with people on a deep level.',
      image: 'assets/Workshop.png',
    },
    {
      title: 'CC Ignite',
      description: 'People love and respect musicians because music has the power to evoke emotions and connect with people on a deep level.',
      image: 'assets/CCIgnite.png',
    },
  ];

  document.querySelector('.program-container').innerHTML = myPrograms.map((program) => `
      <article  class="first-container p-2 ">
          <div class="d-flex align-items-center program-card p-2">
              <img src=${program.image} width="50" height="50" alt="lecture">
              <h4 class="program-title px-2">${program.title}</h4>
              <span class="px-1 text-white">${program.description}</span>
          </div>
      </article >
  `).join('');
