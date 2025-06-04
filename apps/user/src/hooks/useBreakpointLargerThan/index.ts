import { ref, onMounted, onUnmounted } from 'vue';

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

type BreakpointKey = keyof typeof breakpoints;

export default function useBreakpointLargerThan(bp: BreakpointKey) {
  const isLarger = ref(false);

  const check = () => {
    isLarger.value = window.innerWidth >= breakpoints[bp];
  };

  onMounted(() => {
    check();
    window.addEventListener(`resize`, check);
  });

  onUnmounted(() => {
    window.removeEventListener(`resize`, check);
  });

  return isLarger;
}
