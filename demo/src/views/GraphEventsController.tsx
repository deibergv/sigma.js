import { useRegisterEvents, useSigma } from "react-sigma-v2";
import { FC, useEffect } from "react";

function getMouseLayer() {
  return document.querySelector(".sigma-mouse");
}

const GraphEventsController: FC<{ 
  setHoveredNode: (node: string | null) => void
}> = ({ setHoveredNode, children}) => {
  const sigma = useSigma();
  const graph = sigma.getGraph();
  const registerEvents = useRegisterEvents();

  /**
   * Initialize here settings that require to know the graph and/or the sigma
   * instance:
   */
  useEffect(() => {
    registerEvents({
      clickNode({ node }) {
        if (!graph.getNodeAttribute(node, "hidden")) {
          window.open(graph.getNodeAttribute(node, "URL"), "_blank");
          
          if (graph.getNodeAttribute(node, "state") === -1) {
            graph.setNodeAttribute(node, "state", 1)
          }
          
          
          
          
          //graph.setNodeAttribute(node, "hidden", "hidden");
          


          //setHoveredNode(node);
          //const mouseLayer = getMouseLayer();
          //if (mouseLayer) mouseLayer.classList.add("mouse-pointer");
        }
      },
      rightClickNode({ node }) {
        if (graph.getNodeAttribute(node, "hidden")) {
          graph.setNodeAttribute(node, "hidden", "");
          
          setHoveredNode(null);
          //const mouseLayer = getMouseLayer();
          //if (mouseLayer) mouseLayer.classList.remove("mouse-pointer");
        }
      },













      enterNode({ node }) {
        setHoveredNode(node);
        // TODO: Find a better way to get the DOM mouse layer:
        const mouseLayer = getMouseLayer();
        if (mouseLayer) mouseLayer.classList.add("mouse-pointer");
      },
      leaveNode() {
        setHoveredNode(null);
        // TODO: Find a better way to get the DOM mouse layer:
        const mouseLayer = getMouseLayer();
        if (mouseLayer) mouseLayer.classList.remove("mouse-pointer");
      },
    });
  }, []);

  return <>{children}</>;
};

export default GraphEventsController;
