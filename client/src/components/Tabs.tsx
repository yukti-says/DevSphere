import { motion } from 'framer-motion';

interface Tab {
  id: string;
  label: string;
  icon: string;
}

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

const Tabs = ({ tabs, activeTab, onTabChange }: TabsProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className="relative px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
        >
          <span className={`flex items-center gap-2 relative z-10 ${
            activeTab === tab.id ? 'text-primary-foreground' : 'text-muted-foreground'
          }`}>
            <span>{tab.icon}</span>
            {tab.label}
          </span>
          
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-gradient-primary rounded-lg shadow-glow"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          
          {activeTab !== tab.id && (
            <div className="absolute inset-0 bg-secondary rounded-lg" />
          )}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
