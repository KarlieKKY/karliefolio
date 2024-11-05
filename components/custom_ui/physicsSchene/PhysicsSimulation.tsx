"use client";
import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

const wordsToDisplay = [
  "React.JS",
  "JavaScript",
  "Express",
  "Next.JS",
  "TypeScript",
  "TailwindCSS",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "ShadCN",
  "OpenAI",
  "Socket.IO",
  "Jest",
  "Vite",
  "Axios",
  "PyGame",
  "Flask",
  "WebRTC",
  "StreamLit",
  "AWS",
  "Weaviate",
  "CSS",
  "HTML",
  "MongoDB",
  "Node.JS",
];

type HexColor = string;

const rgbColors: HexColor[] = [
  "102, 110, 255",
  "255, 105, 107",
  "255, 214, 99",
  "105, 255, 150",
  "97, 250, 255",
  "97, 160, 255",
  "255, 102, 183",
  "205, 97, 255",
  "194, 255, 97",
];

function getRgnColor(array: HexColor[]) {
  const randomIdx = Math.floor(Math.random() * array.length);
  return array[randomIdx];
}

const PhysicsSimulation: React.FC = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseConstraintRef = useRef<Matter.MouseConstraint | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (!sceneRef.current) return;

    const {
      Engine,
      Render,
      Runner,
      Bodies,
      Composite,
      Mouse,
      MouseConstraint,
      Vector,
      Events,
    } = Matter;

    const engine = Engine.create();
    engine.gravity.y = 0.5;

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: sceneRef.current.clientWidth,
        height: sceneRef.current.clientHeight,
        wireframes: false,
        background: "transparent",
        // showAngleIndicator: true,
      },
    });

    canvasRef.current = render.canvas;
    render.canvas.style.pointerEvents = "auto";

    const runner = Runner.create();
    Render.run(render);
    Runner.run(runner, engine);

    // Create walls and ground
    const wallOptions = {
      isStatic: true,
      render: { fillStyle: "transparent" },
      //   label: "wall",
      restitution: 0.5,
      friction: 0.3,
    };
    const walls = [
      Bodies.rectangle(
        render.canvas.width / 2,
        render.canvas.height,
        render.canvas.width,
        50,
        wallOptions
      ),
      Bodies.rectangle(
        0,
        render.canvas.height / 2,
        50,
        render.canvas.height,
        wallOptions
      ),
      Bodies.rectangle(
        render.canvas.width,
        render.canvas.height / 2,
        50,
        render.canvas.height,
        wallOptions
      ),
    ];

    const calculateFontSize = (screenWidth: number) => {
      if (screenWidth < 480) {
        return 18;
      } else if (screenWidth < 768) {
        return 22;
      } else if (screenWidth < 1024) {
        return 24;
      } else {
        return 28;
      }
    };

    // Function to create word bodies
    const createWords = () => {
      return wordsToDisplay.map((word) => {
        const x = Math.random() * (render.canvas.width - 100) + 50;
        const y = Math.random() * (render.canvas.height / 2);
        const screenWidth = window.innerWidth;
        const fontSize = calculateFontSize(screenWidth);
        const boxWidth = word.length * fontSize * 0.8;
        const boxHeight = fontSize * 1.2;

        return Bodies.rectangle(x, y, boxWidth, boxHeight, {
          render: {
            fillStyle: `rgba(${getRgnColor(rgbColors)}, 0.85)`,
          },
          label: word,
          friction: 0.3,
          restitution: 0.6,
          density: 0.001,
          frictionAir: 0.001,
          chamfer: { radius: 5 },
        });
      });
    };

    // Create word bodies
    const wordBodies = createWords();

    // Add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    mouseConstraintRef.current = mouseConstraint;

    // Scrolling
    const handleWheel = (e: WheelEvent) => {
      if (!isDragging) {
        window.scrollBy(0, e.deltaY);
      }
    };

    render.canvas.addEventListener("wheel", handleWheel, { passive: true });

    // Dragging
    Events.on(mouseConstraint, "startdrag", () => {
      setIsDragging(true);
      render.canvas.style.cursor = "grabbing";
    });

    Events.on(mouseConstraint, "enddrag", () => {
      setIsDragging(false);
      render.canvas.style.cursor = "grab";
    });

    Events.on(mouseConstraint, "mousemove", () => {
      render.canvas.style.cursor = "grab";
    });

    // Add all bodies to the world
    Composite.add(engine.world, [...walls, ...wordBodies, mouseConstraint]);

    // Resize handler
    const handleResize = () => {
      if (!sceneRef.current) return;
      render.canvas.width = sceneRef.current.clientWidth;
      render.canvas.height = sceneRef.current.clientHeight;

      // Update ground position
      Matter.Body.setPosition(
        walls[0],
        Vector.create(render.canvas.width / 2, render.canvas.height)
      );

      // Update right wall position
      Matter.Body.setPosition(
        walls[2],
        Vector.create(render.canvas.width, render.canvas.height / 2)
      );

      // Update render bounds
      Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: render.canvas.width, y: render.canvas.height },
      });
    };

    window.addEventListener("resize", handleResize);

    // Custom rendering using afterRender event
    Events.on(render, "afterRender", () => {
      const screenWidth = window.innerWidth;
      const fontSize = calculateFontSize(screenWidth);
      const context = render.context;
      context.font = `bold ${fontSize}px Arial`;
      context.fillStyle = "white";
      context.textAlign = "center";
      context.textBaseline = "middle";

      Composite.allBodies(engine.world).forEach((body) => {
        if (!body.isStatic && body.label && typeof body.label === "string") {
          const { x, y } = body.position;
          const angle = body.angle;

          context.save();
          context.translate(x, y);
          context.rotate(angle);
          context.fillText(body.label, 0, 0);
          context.restore();
        }
      });
    });

    // Cleanup function
    return () => {
      render.canvas.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", handleResize);
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      // render.canvas.remove();
      if (render.canvas.parentElement) {
        render.canvas.parentElement.removeChild(render.canvas);
      }
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className="w-full h-full"
      style={{
        cursor: isDragging ? "grabbing" : "grab",
      }}
    />
  );
};

export default PhysicsSimulation;
