import "@testing-library/jest-dom/vitest";

window.alert = window.alert || (() => {});
window.confirm = window.confirm || (() => true);
