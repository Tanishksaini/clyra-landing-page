import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Zap, 
  Palette, 
  Users, 
  Globe, 
  Shield, 
  BarChart3, 
  Smartphone, 
  Cloud,
  Settings,
  PlayCircle,
  Monitor
} from 'lucide-react';

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const features = [
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Advanced scheduling system with timezone support, recurring campaigns, and automated content rotation.',
      color: 'bg-blue-500'
    },
    {
      icon: Zap,
      title: 'Real-Time Updates',
      description: 'Instant content deployment with our global CDN. Changes appear on screens within seconds.',
      color: 'bg-yellow-500'
    },
    {
      icon: Palette,
      title: 'Custom Layouts',
      description: 'Drag-and-drop editor with templates, custom branding, and responsive design capabilities.',
      color: 'bg-purple-500'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Role-based access control, approval workflows, and team management features.',
      color: 'bg-green-500'
    },
    {
      icon: Globe,
      title: 'Multi-Location Support',
      description: 'Manage displays across multiple locations, regions, and time zones from one dashboard.',
      color: 'bg-indigo-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption, secure API access, and compliance with industry standards.',
      color: 'bg-red-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Detailed performance metrics, audience analytics, and ROI tracking for your campaigns.',
      color: 'bg-orange-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Management',
      description: 'Full-featured mobile app for managing your displays on the go with offline capabilities.',
      color: 'bg-pink-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: '99.9% uptime guarantee with automatic backups and disaster recovery systems.',
      color: 'bg-cyan-500'
    },
    {
      icon: Settings,
      title: 'API Integration',
      description: 'Robust REST API for custom integrations with your existing business systems.',
      color: 'bg-gray-500'
    },
    {
      icon: PlayCircle,
      title: 'Media Management',
      description: 'Support for all media types with automatic optimization and format conversion.',
      color: 'bg-emerald-500'
    },
    {
      icon: Monitor,
      title: 'Display Monitoring',
      description: 'Real-time health monitoring with alerts and remote troubleshooting capabilities.',
      color: 'bg-teal-500'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful <span className="text-[#679F9F]">Features</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover all the tools and capabilities that make Clyra the most comprehensive 
              digital signage management platform available today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#679F9F] mb-4">
              Why Businesses Choose Clyra
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The complete solution for modern digital signage management
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Everything You Need in One Platform
              </h3>
              <div className="space-y-4">
                {[
                  'Intuitive drag-and-drop content editor',
                  'Advanced scheduling with timezone support',
                  'Real-time performance analytics',
                  'Multi-user collaboration tools',
                  'Enterprise-grade security',
                  '24/7 customer support'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-[#679F9F] rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-[#679F9F] to-[#5a8a8a] rounded-2xl p-8 text-white"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Experience Clyra?</h3>
              <p className="mb-6 opacity-90">
                See how our features can transform your digital signage strategy. 
                Start your free trial today and discover the difference.
              </p>
              <div className="space-y-3">
                <motion.a
                  href="/cms/login"
                  className="block bg-white text-[#679F9F] px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                </motion.a>
                <motion.a
                  href="/contact"
                  className="block border border-white/30 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white/10 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Demo
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Choose the plan that fits your needs. All plans include our core features 
              with no hidden fees or long-term contracts.
            </p>
            <motion.a
              href="/contact"
              className="bg-[#679F9F] hover:bg-[#5a8a8a] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 inline-flex items-center gap-2 shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              View Pricing Plans
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;