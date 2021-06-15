import React, { useRef, useEffect } from "react";
import styled from "styled-components";
//Adapted from https://stackoverflow.com/questions/54560790/detect-click-outside-react-component-using-hooks

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: nowrap;
`;
function useOutsideAlerter(ref, open, setOpen) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (open) {
          setOpen(!open);
        }
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, open, setOpen]);
}
/**
 * Component that alerts if you click outside of it
 */
export default function OutsideAlerter({ open, setOpen, children }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, open, setOpen);

  return <Wrapper ref={wrapperRef}>{children}</Wrapper>;
}
