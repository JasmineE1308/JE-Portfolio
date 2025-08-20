import React from 'react'
import { motion } from 'framer-motion'

export default function Section({ id, title, icon: Icon, children }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 flex items-center gap-3"
      >
        {Icon ? (
          <div className="p-2 rounded-2xl bg-gray-100 shadow-sm">
            <Icon className="h-6 w-6" />
          </div>
        ) : null}
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
      </motion.div>
      {children}
    </section>
  )
}
