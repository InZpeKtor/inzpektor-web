import { BookOpen, ExternalLink } from "lucide-react"

/**
 * Documentation CTA Component
 * 
 * A call-to-action section that encourages users to explore
 * the comprehensive project documentation on GitBook.
 */
export default function DocumentationCTA() {
  return (
    <div className="w-full py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="group relative bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10 border border-emerald-500/20 rounded-3xl p-12 hover:border-emerald-500/40 transition-all duration-500 overflow-hidden">
          {/* Animated Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-blue-500/5 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
          
          {/* Content */}
          <div className="relative z-10 text-center space-y-6">
            {/* Icon */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl animate-pulse" />
                <div className="relative bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 p-4 rounded-2xl border border-emerald-500/30">
                  <BookOpen className="w-12 h-12 text-emerald-400" />
                </div>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Want to Learn More About the Project?
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Explore our comprehensive documentation to dive deeper into the Proof of Clean Hands Protocol, 
              technical specifications, integration guides, and more.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="https://pura-vida.gitbook.io/inzpektor/documentation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 group/btn"
              >
                <span>Visit Our Documentation</span>
                <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
              </a>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </div>
  )
}
