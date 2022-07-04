import { t_Effect } from './../interfaces/t_Effect';
  const effects: Array<t_Effect> = [{
    name: "Force Shoot",
    description: "You are constantly shooting",
    command: "force_attack",
    time: 20 
  }, {
    name: "Deaf",
    description: "Mutes all sound",
    command: "deaf",
    time: 45 
  }, {
    name: "Shaky",
    description: "Your sensitivity is unstable",
    command: "shaky",
    time: 40 
  }, {
    name: "Always Crouch",
    description: "You are always crouching",
    command: "crouch_only",
    time: 45
  }, {
    name: "Slippery Hands",
    description: "When an Enemy is visible, you drop all your weapons",
    command: "slippery_hands",
    time: 25,
  }, {
    name: "Switch Spin",
    description: "Switches between +right and +left every few secodns",
    command: "switch_spin",
    time: 30,
  }, {
    name: "Disco Light",
    description: "Makes the world Disco Light",
    command: "rgb_world",
    time: 35,
  }, {
    name: "Deep Fried",
    description: "The world looks like it has been deep fried",
    command: "deep_fried",
    time: 30,
  }, {
    name: "Console Expirence",
    description: "Limits your FPS",
    command: "limit_fps",
    time: 30
  }, {
    name: "Blindness",
    description: "Minecraft Blindness",
    command: "extreme_fog",
    time: 45 
  }, {
    name: "DvD Saver",
    description: "Makes CS:GO Window go DvD Saver mode",
    command: "dvd_saver",
    time: 40 
  }, {
    name: "Nausea",
    description: "Minecraft Nausea",
    command: "nausea",
    time: 45 
  }, {
    name: "Idiot",
    description: "Wastes your entire economy when possible",
    command: "idiot",
    time: 45 
  }, {
    name: "Where is the sun?",
    description: "Makes everything super dark",
    command: "no_sun",
    time: 30
  }, {
    name: "1990s Input Style",
    description: "Your Yaw sensitivity is much higher than your pitch",
    command: "old_input",
    time: 30
  }, {
    name: "Disable Random Direction",
    description: "Disables a random movement direction",
    command: "rnd_movement_disable",
    time: 30
  }, {
    name: "Im Here",
    description: "Sends a message in chat of your current location",
    command: "im_here",
    time: 25
  }, {
    name: "Slow Movement",
    description: "Makes your movement slower",
    command: "slow_movement",
    time: 30
  }, {
    name: "Sticky Hands",
    description: "Your hands are stuck to your weapon",
    command: "sticky_hands",
    time: 35
  }, {
    name: "Help! My W key is stuck",
    description: "Your W key stuck",
    command: "w_key_stuck",
    time: 25
  }, {
    name: "Realistic Recoil", 
    description: "Your recoil is realistic",
    command: "real_recoil",
    time: 60 
  }, {
    name: "Enemies are magic",
    description: "When looking at an enenmy, you will do a 180 degree turn",
    command: "enemy_magic",
    time: 30 
  }, {
    name: "One Hit KO",
    description: "Your HP is set to one",
    command: "one_hit_ko",
    time: 30
  }];


  
  export default effects;