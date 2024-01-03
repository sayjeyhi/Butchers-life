/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/models/santa.glb -o src/components/Santa.jsx -r public
*/

import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import {useGame} from "../hooks/useGame.jsx";

export function Player(props) {
  const { nodes, materials, animations } = useGLTF("/models/character-man-2.glb");
  const { actions } = useAnimations(animations, props.group);
  const { status, dispatch } = useGame();

  useEffect(() => {
    if (status === "paused") {
      console.log("Stop running")
      actions["running"]?.stop();
      actions["running"]?.fadeOut(0.1);
    }
    actions["running"].fadeIn(0.01).play();
  }, [status]);

  return (
    <group ref={props.group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]}  scale={0.01}>
          <group name="0">
            <skinnedMesh
              name="0001"
              geometry={nodes["0001"].geometry}
              material={materials.hairs}
              skeleton={nodes["0001"].skeleton}
            />
            <skinnedMesh
              name="0001_1"
              geometry={nodes["0001_1"].geometry}
              material={materials.body}
              skeleton={nodes["0001_1"].skeleton}
            />
            <skinnedMesh
              name="0001_2"
              geometry={nodes["0001_2"].geometry}
              material={materials.eye}
              skeleton={nodes["0001_2"].skeleton}
            />
            <skinnedMesh
              name="0001_3"
              geometry={nodes["0001_3"].geometry}
              material={materials.noose}
              skeleton={nodes["0001_3"].skeleton}
            />
            <skinnedMesh
              name="0001_4"
              geometry={nodes["0001_4"].geometry}
              material={materials.jean}
              skeleton={nodes["0001_4"].skeleton}
            />
            <skinnedMesh
              name="0001_5"
              geometry={nodes["0001_5"].geometry}
              material={materials.shirt}
              skeleton={nodes["0001_5"].skeleton}
            />
          </group>
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/character-man-2.glb");
