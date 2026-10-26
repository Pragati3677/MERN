const links = [
  {
    label: "Dashboard",
    icon: "⊞",
    view: "student-dashboard",
  },
  {
    label: "My Learning",
    icon: "📚",
    view: "my-learning",
  },
  {
    label: "Learning Path",
    icon: "🗺️",
    view: "learning-path",
  },
  {
    label: "Study Planner",
    icon: "📅",
    view: "study-planner",
  },
  {
    label: "Smart Quizzes",
    icon: "🧠",
    view: "smart-quiz",
  },
  {
    label: "Performance Analysis",
    icon: "📊",
    view: "performance",
  },
  {
    label: "AI Recommendations",
    icon: "✨",
    view: "recommendations",
  },
  {
    label: "Progress",
    icon: "📈",
    view: "progress",
  },
  {
    label: "Certificates",
    icon: "🎓",
    view: "certificates",
  },
  {
    label: "Career Mentor",
    icon: "🚀",
    view: "career",
  },

  // Student-specific pages
  {
    label: "Notifications",
    icon: "🔔",
    view: "notifications",
  },
  {
    label: "Profile",
    icon: "👤",
    view: "profile",
  },
  {
    label: "Settings",
    icon: "⚙️",
    view: "settings",
  },
];

export default function StudentSidebar({
  current,
  onNav,
  collapsed,
}) {
  return (
    <aside
      className="flex flex-col bg-white border-r border-slate-200 h-screen sticky top-0"
      style={{
        width: collapsed ? 64 : 232,
        minWidth: collapsed ? 64 : 232,
        transition: "width 0.2s",
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-4 py-5 border-b border-slate-100">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
          style={{
            background:
              "linear-gradient(135deg, #4F46E5, #06B6D4)",
          }}
        >
          AI
        </div>

        {!collapsed && (
          <div>
            <div
              className="text-sm font-700 text-indigo-900"
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontWeight: 700,
              }}
            >
              LearnAI
            </div>

            <div className="text-xs text-slate-400">
              Adaptive Platform
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
        {links.map((link) => (
          <button
            key={link.view}
            onClick={() => onNav(link.view)}
            className={`sidebar-link w-full text-left ${
              current === link.view ? "active" : ""
            }`}
          >
            <span className="text-base">
              {link.icon}
            </span>

            {!collapsed && (
              <span className="flex-1">
                {link.label}
              </span>
            )}

            {!collapsed && link.badge && (
              <span
                className="ml-auto text-xs font-bold px-1.5 py-0.5 rounded-full"
                style={{
                  background:
                    current === link.view
                      ? "rgba(255,255,255,0.25)"
                      : "#4F46E5",
                  color: "white",
                  minWidth: 18,
                  textAlign: "center",
                }}
              >
                {link.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* User */}
      {!collapsed && (
        <div className="p-3 border-t border-slate-100">
          <div className="flex items-center gap-2.5 px-2 py-1.5">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm">
              A
            </div>

            <div>
              <div
                className="text-sm font-600 text-slate-800"
                style={{
                  fontWeight: 600,
                }}
              >
                Arjun Sharma
              </div>

              <div className="text-xs text-slate-400">
                CS — Sem 6
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}