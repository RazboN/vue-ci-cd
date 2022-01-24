import { ref, computed } from 'vue'

export const collapsed = ref(true)
export const dialogVisible = ref(false)

export const toggleSidebar = () => (collapsed.value = !collapsed.value)
export const toggleDialog = () => (dialogVisible.value = !dialogVisible.value)

export const SIDEBAR_WIDTH = 180
export const SIDEBAR_WIDTH_COLLAPSED = 38
export const sidebarWidth = computed(
  () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
)
