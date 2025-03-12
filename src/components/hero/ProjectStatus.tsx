import React, { useState, useEffect } from "react";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Clock, CheckCircle, XCircle, Activity, Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectStatusProps {
  available?: boolean;
  lastActive?: string;
  currentProject?: string;
  upcomingProjects?: Array<{ name: string; date: string }>;
}

const ProjectStatus = ({
  available = true,
  lastActive = "2 hours ago",
  currentProject = "E-commerce Testing Suite",
  upcomingProjects = [
    { name: "Banking App Automation", date: "June 15" },
    { name: "Healthcare API Testing", date: "July 10" },
  ],
}: ProjectStatusProps) => {
  const [time, setTime] = useState(new Date());
  const [progress, setProgress] = useState(87);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Animate progress randomly for demo
  useEffect(() => {
    const progressInterval = setInterval(() => {
      const newProgress = Math.min(
        100,
        Math.max(80, progress + (Math.random() * 10 - 5)),
      );
      setProgress(newProgress);
    }, 3000);

    return () => clearInterval(progressInterval);
  }, [progress]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <Card className="w-full sm:w-[350px] p-5 backdrop-blur-md bg-black/50 border border-gray-800/50 shadow-xl">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white">Project Status</h3>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3 text-gray-400" />
              <span className="text-xs text-gray-400">
                {time.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div>
                    {available ? (
                      <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30 flex items-center gap-1 border border-green-500/30">
                        <CheckCircle className="h-3 w-3" />
                        <span>Available for Work</span>
                      </Badge>
                    ) : (
                      <Badge className="bg-red-500/20 text-red-400 hover:bg-red-500/30 flex items-center gap-1 border border-red-500/30">
                        <XCircle className="h-3 w-3" />
                        <span>Currently Busy</span>
                      </Badge>
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Last active: {lastActive}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Activity className="h-4 w-4 text-indigo-400" />
              <span className="text-xs font-medium text-white">
                Current Project:
              </span>
            </div>
            <div className="ml-6">
              <div className="relative h-1.5 bg-gray-700 rounded-full mb-2 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1 }}
                />

                {/* Animated glow effect */}
                <motion.div
                  className="absolute inset-0 bg-white opacity-30 rounded-full w-20 h-full"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "linear",
                  }}
                />
              </div>
              <p className="text-sm font-medium text-white">{currentProject}</p>
              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-400">
                  {Math.round(progress)}% Complete
                </p>
                <p className="text-xs text-gray-400">Est. completion: 1 week</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-indigo-400" />
              <span className="text-xs font-medium text-white">
                Upcoming Projects:
              </span>
            </div>
            <div className="ml-6 space-y-2">
              {upcomingProjects.map((project, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-gray-800/30 p-2 rounded-md border border-gray-700/30"
                >
                  <p className="text-xs text-gray-300">{project.name}</p>
                  <Badge
                    variant="outline"
                    className="text-xs h-5 border-indigo-500/30 text-indigo-400"
                  >
                    {project.date}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectStatus;
