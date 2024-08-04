"use client";
import React, { useRef} from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

const variants  = {
  move: {
    up: {initial: i => ({y: i,opacity: 0,}),},
    down: {initial: i => ({y: -i,opacity: 0,}),},
    right: {initial: i => ({x: -i,opacity: 0,}),},
    left: {initial: i => ({x: i,opacity: 0,}),},
    expand: {
      animate: { y: 0, x: 0, opacity: 1 },
    }
  },
  zoom: {
    in: {initial: { scale: 0.8, opacity: 0 },},
    out: { scale: 1.2, opacity: 0 },
    expand: {
      animate: { scale: 1, opacity: 1 },
    }
  },
  card: {
    '3d': {initial: { rotateY: 20, rotateX: 20, rotateZ: 20, opacity: 0 },},
    flip: { rotateY: 180, opacity: 0 },
    expand: {
      animate: { rotateY: 0, rotateX: 0, rotateZ: 0, opacity: 1 },
    }
  }

}

export const Move = ({
  custom = 35,
  animate = 'up',
  onload = true,
  whileInView = false,
  onceView = false,
  animateOnHover = false,
  delay = null,
  transition,
  children,
  className,
}: {
  custom?: number; 
  animate?: 'up' | 'down' | 'right' | 'left';
  onload?: boolean;
  whileInView?: boolean;
  onceView?: boolean;
  animateOnHover?: boolean;
  delay?: number | null;
  transition?;
  children: React.ReactNode;
  className?: string;
}) => {
  if (whileInView ) {
    onload = false;
    animateOnHover = false;
  } else if (animateOnHover) {
    onload = false;
  }

  const ref = useRef(null);
  const  isInView  = useInView(ref, { once: true });

  if (isInView && onceView) {
    onload = true;
  }

  return (
    <motion.span
      ref={ref}
      custom={custom}
      initial='initial'
      whileInView={whileInView && !onceView && 'animate'}
      animate={onload && 'animate'}
      whileHover={animateOnHover && 'animate'}
      transition={{ delay: delay, duration: 1.5, ease: [0.16, 1, 0.3, 1] , ...transition }}
      variants={{ ...variants.move[animate as string],  ...variants.move.expand }}
      className={cn(
        `inline-block`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};

// --- under construction ---
export const MoveMultiple = (
  { 
    animate = 'up',
    delay = null,
    delayeach = false,
    className,
    children }: {
      animate?: 'up' | 'down' | 'right' | 'left',
      delay?: number | null,
      delayeach?: boolean,
      className?: string,
      children?: React.ReactNode
    }
) => {

  return (
    <div className={cn(className)}>
      {React.Children.toArray(children).map((child, index) => {
        return (
          <Move
            key={index}
            animate={animate}
            delay={delayeach ? index * 0.1 : delay}
          >
            {child} index: {index}
          </Move>
        );
      })}
    </div>
  )
}
// --- under construction ---


export const Zoom = ({
  custom = 35,
  animate = 'in',
  onload = true,
  whileInView = false,
  onceView = false,
  animateOnHover = false,
  delay = null,
  transition,
  children,
  className,
}: {
  custom?: number; 
  animate?: 'in' | 'out';
  onload?: boolean;
  whileInView?: boolean;
  onceView?: boolean;
  animateOnHover?: boolean;
  delay?: number | null;
  transition?;
  children: React.ReactNode;
  className?: string;
}) => {
  if (whileInView ) {
    onload = false;
    animateOnHover = false;
  } else if (animateOnHover) {
    onload = false;
  }

  const ref = useRef(null);
  const  isInView  = useInView(ref, { once: true });

  if (isInView && onceView) {
    onload = true;
  }

  return (
    <motion.span
      ref={ref}
      custom={custom}
      initial='initial'
      whileInView={whileInView && !onceView && 'animate'}
      animate={onload && 'animate'}
      whileHover={animateOnHover && 'animate'}
      transition={{ delay: delay, duration: .3, ease: [0.16, 1, 0.3, 1] , ...{ type: 'spring', stiffness: 250 }, ...transition }}
      variants={{ ...variants.zoom[animate as string],  ...variants.zoom.expand }}
      className={cn(
        `inline-block`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};

export const CardEffect = ({
  animate = '3d',
  transition,
  children,
  className,
}: {
  animate?: '3d' | 'flip';
  transition?;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial='initial'
      animate='animate'
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], ...{ type: 'spring', stiffness: 100 }, ...transition } }
            variants={{...variants.card[animate as string], ...variants.card.expand}}
      className={cn(
        `relative inline-block`,
        className
      )}
    >
      {children}
    </motion.span>
  );
}
