// Edit project titles, descriptions, links and screenshot paths here.
const projects = [
  {
    "id": "endless-rollball",
    "title": "Endless Rollball",
    "type": "Individual final-year project",
    "year": 2026,
    "tools": [
      "Unity",
      "C#",
      "IMU input",
      "Object pooling"
    ],
    "summary": "A motion-controlled rolling game designed for rehabilitation.",
    "details": [
      [
        "Motion input",
        "A Seeed Studio XIAO nRF52840 Sense provides motion input for controlling the rolling avatar."
      ],
      [
        "Procedural track",
        "Reusable track and obstacle prefabs are pooled to assemble the course as the player advances."
      ],
      [
        "Visual variety",
        "Three themed environments change the look of the course, and an avatar system gives players customisation options."
      ]
    ],
    "images": [
      [
        "media/futuristic-street.png",
        "Futuristic Street"
      ],
      [
        "media/water-theme-park.png",
        "Water Theme Park"
      ],
      [
        "media/ancient-dungeon.png",
        "Ancient Dungeon"
      ]
    ]
  },
  {
    "id": "vr-fishing",
    "title": "VR Fishing Game",
    "type": "Team project",
    "year": 2026,
    "tools": [
      "Unity",
      "C#",
      "XR Interaction Toolkit"
    ],
    "summary": "A VR fishing experience with controller feedback and an aquarium for collected fish.",
    "details": [
      [
        "Fishing loop",
        "Cast, wait for a bite and reel in the fish while managing line tension. Visual, audio and vibration cues provide feedback."
      ],
      [
        "Environments",
        "Beach, sea, lake house and underwater scenes give the experience different settings."
      ],
      [
        "Aquarium",
        "Collected fish carry across scenes and appear in an aquarium with movement and feeding interactions."
      ]
    ],
    "repo": "https://github.com/zwzenre/VirtualRealityAssignment"
  },
  {
    "id": "weather-simulation",
    "title": "Dynamic Weather Simulation",
    "type": "Group project",
    "year": 2026,
    "tools": [
      "Unity",
      "C#",
      "Unity Particle System"
    ],
    "summary": "A city scene with six weather states and an interface for exploring how they change.",
    "details": [
      [
        "Weather transitions",
        "A probability matrix selects the next state using the current weather, temperature and humidity."
      ],
      [
        "Visual effects",
        "Particle systems and blended effects represent changes such as lightning, snow accumulation and heat distortion."
      ],
      [
        "Simulation controls",
        "The interface displays temperature, humidity and a countdown. Users can adjust ranges and timing or choose the next state."
      ]
    ],
    "repo": "https://github.com/zwzenre/ComputerGameTechAssignment"
  },
  {
    "id": "interactive-robot",
    "title": "Interactive 3D Robot",
    "type": "Group project",
    "year": 2025,
    "tools": [
      "C++",
      "OpenGL"
    ],
    "summary": "An animated 3D robot with articulated joints and interactive camera and lighting controls.",
    "details": [
      [
        "Hierarchical modelling",
        "Parent and child transformations connect the head, torso, limbs and individual joints."
      ],
      [
        "Animation",
        "The robot supports walking, jumping and prop animations alongside manual joint controls."
      ],
      [
        "Rendering",
        "Keyboard and mouse controls adjust the camera and lighting. Texture options change the robot’s appearance."
      ]
    ],
    "repo": "https://github.com/KQKhoo1209/GraphicProgramming"
  }
];

