const ease = [0.22, 1, 0.36, 1];
export const fadeUp = { hidden:{opacity:0,y:28}, show:{opacity:1,y:0,transition:{duration:.8,ease}} };
export const scaleIn = { hidden:{opacity:0,scale:.95}, show:{opacity:1,scale:1,transition:{duration:.9,ease}} };
export const stagger = { hidden:{}, show:{transition:{staggerChildren:.1}} };
export const vp = { once:true, margin:"-80px" };
