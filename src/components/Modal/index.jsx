// import motion
import { motion } from "framer-motion";
import Backdrop from "../Backdrop";

// possible animation states
// dropIn allows you to define multiple custom animation states
const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    // this animation drops in from the top and lands in the middle, then when it leaves it drops even further to the bottom 
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            // with stiffness the spring will react very quickly if its set really high
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
}

// modal will have two props, one is a function to close the modal and other is the text that we want to display inside of the window 
const Modal = ({ handleClose, text }) => {
    return (
        // when the backdrop is clicked, it will automatically close the window
        <Backdrop onClick={handleClose}>
            <motion.div
                // add drag prop to be able to drag the modal across the screen
                drag

                // event bubbling - prevent clicks on modal from bubbling to backdrop
                onClick={(e) => e.stopPropagation()}
                // add a modal class
                className="modal orange-gradient"
                // variants - references an object called dropIn
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <p>{text}</p>
                <button onClick={handleClose}>Close</button>
            </motion.div>
        </Backdrop>
    );
}

export default Modal