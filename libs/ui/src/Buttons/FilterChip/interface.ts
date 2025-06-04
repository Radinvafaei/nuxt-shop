import type { Component } from 'vue';
export interface IFilterChipProps {
  icon: Component;
  title: string;
  onClick: () => void;
}
