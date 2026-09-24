```css
:root {
  --pink: #ff8fb1;
  --hot-pink: #ff5f91;
  --dark-pink: #8f3d61;
  --light-pink: #fff0f5;
  --text: #593647;
  --muted: #9b7181;
  --white: #ffffff;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;

  font-family:
    "Trebuchet MS",
    Arial,
    sans-serif;

  color: var(--text);

  background:
    radial-gradient(
      circle at 15% 15%,
      white,
      transparent 30%
    ),
    radial-gradient(
      circle at 85% 20%,
      #ffc4d7,
      transparent 30%
    ),
    linear-gradient(
      135deg,
      #ffe6ef,
      #fff8f5,
      #ffe1eb
    );

  overflow-x: hidden;
}


/* GAME CONTAINER */

.game {

  width: min(
    680px,
    calc(100% - 24px)
  );

  min-height: calc(100vh - 50px);

  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 25px 0 60px;

  position: relative;
  z-index: 2;
}


/* SCREENS */

.screen {

  display: none;

  width: 100%;

  animation:
    appear .45s ease;
}

.screen.active {
  display: block;
}

@keyframes appear {

  from {
    opacity: 0;
    transform:
      translateY(20px)
      scale(.97);
  }

  to {
    opacity: 1;
    transform:
      translateY(0)
      scale(1);
  }

}


/* CARD */

.card {

  background:
    rgba(255,255,255,.9);

  backdrop-filter:
    blur(15px);

  border:
    1px solid
    rgba(255,255,255,.9);

  border-radius:
    30px;

  padding:
    45px 35px;

  text-align:
    center;

  box-shadow:
    0 25px 70px
    rgba(142,55,91,.16);

}


/* START */

.bear {

  font-size:
    75px;

  animation:
    floating 3s
    ease-in-out
    infinite;
}

@keyframes floating {

  50% {
    transform:
      translateY(-9px)
      rotate(3deg);
  }

}

.small-title {

  margin:
    15px 0 8px;

  color:
    var(--hot-pink);

  font-size:
    12px;

  font-weight:
    900;

  text-transform:
    uppercase;

  letter-spacing:
    .15em;
}

h1 {

  margin:
    0;

  color:
    #713c54;

  font-size:
    clamp(
      40px,
      9vw,
      62px
    );

  line-height:
    1.05;
}

h2 {

  margin:
    0;

  color:
    #713c54;

  font-size:
    clamp(
      29px,
      7vw,
      43px
    );

  line-height:
    1.1;
}

.intro {

  margin:
    18px 0 0;

  color:
    var(--muted);

  font-size:
    17px;
}

.intro.special {

  margin-top:
    5px;

  color:
    var(--dark-pink);

  font-weight:
    800;
}


/* BUTTONS */

.main-button {

  border:
    none;

  border-radius:
    999px;

  padding:
    16px 25px;

  margin-top:
    28px;

  cursor:
    pointer;

  color:
    white;

  font-size:
    15px;

  font-weight:
    900;

  background:
    linear-gradient(
      135deg,
      var(--hot-pink),
      #ff7da7
    );

  box-shadow:
    0 12px 25px
    rgba(255,95,145,.25);

  transition:
    .2s;
}

.main-button:hover {

  transform:
    translateY(-3px);

  box-shadow:
    0 17px 30px
    rgba(255,95,145,.3);
}

.tiny {

  color:
    #b18a99;

  font-size:
    12px;

  margin-top:
    18px;
}


/* STEPS */

.step {

  display:
    flex;

  justify-content:
    center;

  color:
    #d48ca4;

  font-size:
    11px;

  font-weight:
    900;

  letter-spacing:
    .15em;

  margin-bottom:
    28px;
}

.question {

  color:
    var(--muted);

  margin:
    15px 0 22px;
}


/* CHOICES */

.options {

  display:
    grid;

  gap:
    12px;
}

.options button {

  width:
    100%;

  padding:
    16px;

  border:
    1.5px solid
    #f3cfdb;

  border-radius:
    18px;

  background:
    #fffafd;

  color:
    var(--text);

  text-align:
    left;

  cursor:
    pointer;

  font-weight:
    700;

  transition:
    .2s;
}

.options button:hover,
.options button.selected {

  background:
    var(--light-pink);

  border-color:
    var(--pink);

  transform:
    translateY(-2px);
}


/* MESSAGES */

.message {

  min-height:
    24px;

  margin:
    17px 0 0;

  color:
    var(--dark-pink);

  font-weight:
    800;
}


/* NEXT BUTTON */

.next-button {

  border:
    none;

  border-radius:
    999px;

  padding:
    13px 23px;

  margin-top:
    17px;

  cursor:
    pointer;

  background:
    var(--light-pink);

  color:
    var(--dark-pink);

  font-weight:
    900;
}

.hidden {
  display:
    none !important;
}


/* CUDDLES */

.progress {

  height:
    15px;

  margin:
    25px 0 8px;

  background:
    #f7dce5;

  border-radius:
    999px;

  overflow:
    hidden;
}

#progress-bar {

  width:
    0%;

  height:
    100%;

  background:
    linear-gradient(
      90deg,
      #ff9fbd,
      #ff5f91
    );

  border-radius:
    inherit;

  transition:
    width .25s;
}

#cuddle-count {

  color:
    var(--muted);

  font-size:
    13px;
}

#heart-grid {

  display:
    grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap:
    12px;

  margin-top:
    25px;
}

.heart {

  border:
    none;

  border-radius:
    18px;

  background:
    #fff1f5;

  padding:
    18px 5px;

  font-size:
    30px;

  cursor:
    pointer;

  transition:
    .2s;
}

.heart:hover {

  transform:
    scale(1.08)
    rotate(-4deg);
}

.heart.popped {

  opacity:
    .25;

  transform:
    scale(.7);

  pointer-events:
    none;
}


/* NOTE */

.note {

  display:
    flex;

  align-items:
    center;

  gap:
    12px;

  text-align:
    left;

  margin-top:
    24px;

  padding:
    15px;

  background:
    #fff5f8;

  border-radius:
    18px;
}

.note span {

  color:
    var(--hot-pink);

  font-size:
    28px;
}

.note p {

  margin:
    0;

  color:
    var(--muted);

  font-size:
    14px;

  line-height:
    1.5;
}


/* FINAL */

.crown {

  font-size:
    55px;

  animation:
    floating 3s
    ease-in-out
    infinite;
}

.final-text {

  color:
    var(--muted);

  line-height:
    1.7;

  margin:
    20px auto;

  max-width:
    510px;
}

.promise {

  display:
    flex;

  align-items:
    center;

  gap:
    14px;

  padding:
    17px;

  margin-top:
    22px;

  text-align:
    left;

  background:
    linear-gradient(
      135deg,
      #fff1f6,
      #fff8fb
    );

  border:
    1px solid
    #f7dce5;

  border-radius:
    22px;
}

.promise div {

  font-size:
    32px;
}

.promise p {

  margin:
    0;

  color:
    var(--muted);

  font-size:
    14px;

  line-height:
    1.5;
}

.promise strong {

  color:
    var(--dark-pink);
}

.love {

  color:
    var(--hot-pink);

  font-size:
    22px;

  font-weight:
    900;

  margin:
    25px 0 0;
}


/* FLOATING HEARTS */

#floating-hearts {

  position:
    fixed;

  inset:
    0;

  pointer-events:
    none;

  overflow:
    hidden;

  z-index:
    1;
}

.floating-heart {

  position:
    absolute;

  bottom:
    -30px;

  opacity:
    .6;

  animation:
    rise linear forwards;
}

@keyframes rise {

  to {

    transform:
      translateY(-110vh)
      rotate(360deg);

    opacity:
      0;
  }

}


/* FOOTER */

footer {

  position:
    fixed;

  bottom:
    12px;

  left:
    0;

  right:
    0;

  text-align:
    center;

  color:
    #bd8b9d;

  font-size:
    11px;

  z-index:
    3;
}


/* PHONE */

@media(max-width:480px) {

  .game {

    width:
      calc(100% - 18px);

    padding-top:
      12px;
  }

  .card {

    padding:
      30px 20px;

    border-radius:
      24px;
  }

  .heart {

    padding:
      15px 4px;
  }

}
```

