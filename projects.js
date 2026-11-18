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
    "repo": "https://github.com/KQKhoo1209/Endless_Rollball", "images": [["media/endless-rollball-beach.jpg", "Beach course during a Standard run in Endless Rollball"]]
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
    "repo": "https://github.com/zwzenre/VirtualRealityAssignment",
    "images": [
      [
        "media/vr-fishing-reeling.jpg",
        "Fishing rod and line during the VR demo"
      ],
      [
        "media/vr-fishing-underwater.jpg",
        "Reaching toward a shell in the underwater scene"
      ]
    ]
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
    "repo": "https://github.com/zwzenre/ComputerGameTechAssignment",
    "images": [
      [
        "media/weather-rain.jpg",
        "Rain over the city with live weather controls"
      ],
      [
        "media/weather-storm.jpg",
        "Storm state with rain and reduced lighting"
      ]
    ]
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
    "repo": "https://github.com/KQKhoo1209/GraphicProgramming", "images": [["media/opengl-robot.jpg", "Articulated robot rendered in the OpenGL application"]]
  }
];


