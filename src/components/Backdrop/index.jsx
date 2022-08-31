import { motion } from "framer-motion";

// the backdrop which is an overlay that sits across the entire screen and makes everything else dark
// the modal window will sit on top of the backdrop

// handle clicks on backdrop
// this component will take two props:
// children which allows us to embed additional components in between the tags for the backdrop
// the other prop is onClick which allows us to pass a custom event handler into the component to update the global state when the backdrop is clicked
const Backdrop = ({ children, onClick }) => {

    return (
        <motion.div
            className="backdrop"
            // define the onClick handler as the function that gets passed in as a prop
            onClick={onClick}
            // set the intial state as invisible
            initial={{ opacity: 0 }}
            // when active make visible
            animate={{ opacity: 1 }}
            // when the animation is finished go back to opacity of 0
            exit={{ opacity: 0 }}
        >
            {/* the children will go in between the motion div tags */}
            {children}
        </motion.div>
    )
}

export default Backdrop;