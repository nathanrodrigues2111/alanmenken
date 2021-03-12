import { header } from "./components/header";
import { work } from "./components/work";
import { table } from "./components/table";
import { award } from "./components/award";
import { homeGallery } from "./components/homeGallery";
import { homeCanvas } from "./components/homeCanvas";
import { landingOverlay } from "./components/landingOverlay";

AOS.init({
  once: true,
});

header();
work();
table();
award();
homeGallery();
homeCanvas();
landingOverlay();
