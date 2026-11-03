setcpm(60)

$:arrange(

    // Dashig through the snow

  [1,stack(
    note("G E").sound("piano")
    ._pianoroll()
      .room(0.7)
      .gain(0.6),
  )],

  [1,stack(
    note("D ~ C ~ G ~").sound("piano")._pianoroll(),
  )],


  // In a one horse open sleigh


  [1,stack(
    note("G ~ G ~ E ~").sound("piano")._pianoroll()
    .room(0.7)
    .gain(0.6),
  )],

  [1,stack(
    note("D ~ C ~ A ~").sound("piano")._pianoroll()
    .room(0.7)
    .gain(0.6),
  )],


  // Over the fields we go

  [1,stack(
    note("A ~ A ~ F ~").sound("piano")._pianoroll()
    .room(0.7)
    .gain(0.6),
  )],

  [1,stack(
    note("E ~ D ~ B ~").sound("piano")._pianoroll()
    .room(0.7)
    .gain(0.6),
  )],


  // Laughing all the ways


  [1,stack(
    note("G ~ F ~ E ~").sound("piano")._pianoroll()
    .room(0.7)
    .gain(0.6),
  )],

  [1,stack(
    note("D E").sound("piano")._pianoroll()
    .room(0.7)
    .gain(0.6),
  )],

  // Jingle bells jingle bells
  
  [1,stack(
    note("E E").sound("piano")._pianoroll()
    .room(0.7)
    .gain(0.6),
  )],

  [1,stack(
    note("E").sound("piano")._pianoroll()
    .room(0.7)
    .gain(0.6),
  )],

  [1,stack(
    note("E E").sound("piano")._pianoroll()
    .room(0.7)
    .gain(0.6),
  )],

  [1,stack(
    note("E").sound("piano")._pianoroll()
    .room(0.7)
    .gain(0.6),
  )],


  // Jingle all the ways

  [1,stack(
    note("E E").sound("piano")
    .room(0.7)
    .gain(0.6)
    ._pianoroll()
    .room(0.7)
    .gain(0.6),
  )],

  [1,stack(
    note("C ~ D ~ E ~").sound("piano")._pianoroll()
    .room(0.7)
    .gain(0.6),
  )],


  // Oh what fun it is to ride
  
  [1,stack(
    note("F ~ F ~ F ~").sound("piano")._pianoroll()
    .room(0.7)
    .gain(0.6),
  )],

  [1,stack(
    note("F ~ F ~ E ~").sound("piano")._pianoroll()
    .room(0.7)
    .gain(0.6),
  )],

  [1,stack(
    note("E").sound("piano")._pianoroll()
    .room(0.7)
    .gain(0.6),
  )],


  // In a one horse open sleigh hay!

  [1,stack(
    note("E ~ E ~ D ~").sound("piano")._pianoroll()
    .room(0.7)
    .gain(0.6),
  )],

  [1,stack(
    note("D ~ E ~ D ~").sound("piano")._pianoroll()
    .room(0.7)
    .gain(0.6),
  )],

  [1,stack(
    note("G").sound("piano")._pianoroll()
    .room(0.7)
    .gain(0.6),
  )],


  [4, stack(
    note("<[c4,e4,g4] [g3,b3,d4]>")
      .sound("gm_acoustic_guitar_nylon")
      .attack(0.02)
      .release(2)
      .room(0.8)
      .gain(saw.range(0.6, 0).slow(4))
      ._pianoroll()
  )],
  

)

$:note("e5").sound("gm_tubular_bells").room(0.8).gain(0.15)._pianoroll()
$:sound("bd ~ bd ~").bank("RolandTR808").gain(0.5)._punchcard()

