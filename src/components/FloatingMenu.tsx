import { useState, useEffect } from "react";
import { Home, Sun, Moon, Download, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingMenu = () => {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | "system"
      | null;

    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      setTheme("system");
      applyTheme("system");
    }
  }, []);

  const applyTheme = (newTheme: "light" | "dark" | "system") => {
    const root = document.documentElement;

    if (newTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.classList.toggle("dark", systemTheme === "dark");
    } else {
      root.classList.toggle("dark", newTheme === "dark");
    }

    localStorage.setItem("theme", newTheme);
  };

  const cycleTheme = () => {
    const themes: ("light" | "dark" | "system")[] = ["light", "dark", "system"];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "/cv.pdf"; // You'll need to add this file to public folder
    link.download = "cv.pdf";
    link.click();
  };

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="w-4 h-4" />;
      case "dark":
        return <Moon className="w-4 h-4" />;
      case "system":
        return <Monitor className="w-4 h-4" />;
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-card/95 backdrop-blur-sm border border-border rounded-full px-2 py-2 shadow-lg">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full hover:bg-accent"
            aria-label="Scroll to top"
          >
            <Home className="w-4 h-4" />
          </Button>

          <div className="w-px h-6 bg-border" />

          <Button
            variant="ghost"
            size="icon"
            onClick={cycleTheme}
            className="rounded-full hover:bg-accent"
            aria-label={`Switch theme (current: ${theme})`}
          >
            {getThemeIcon()}
          </Button>

          <div className="w-px h-6 bg-border" />

          <Button
            variant="ghost"
            size="icon"
            onClick={downloadResume}
            className="rounded-full hover:bg-accent"
            aria-label="Download resume"
          >
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FloatingMenu;
