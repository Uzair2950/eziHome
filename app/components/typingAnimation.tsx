import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const words = ['Marketing', 'Programming', 'Web Design', 'Social Skills'];

const TypingAnimation = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayText.length < words[wordIndex].length) {
        timeout = setTimeout(() => {
          setDisplayText(words[wordIndex].slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayText('');
        setTyping(true);
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [displayText, typing, wordIndex]);

  return (
    <motion.span
      key={wordIndex}
      className="text-cyan-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {displayText}
    </motion.span>
  );
};


export default TypingAnimation