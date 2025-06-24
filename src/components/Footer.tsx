import React from 'react';
import { Building2, Shield, Mail, Phone, Globe } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const Footer = () => {
  return (
    <footer className="mt-20 py-12 border-t border-border bg-gradient-to-r from-card/30 to-blue-50/30 dark:to-blue-950/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Building2 className="h-5 w-5 text-blue-600 mr-2" />
              <span className="font-bold text-lg">DSAI Hub</span>
              <Badge variant="outline" className="ml-2 text-xs bg-blue-500/20 text-blue-600 border-blue-500/30">
                Internal Portal
              </Badge>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Enterprise AI Tools Portal - Data Science & Artificial Intelligence Division
            </p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <Badge className="bg-green-500/20 text-green-600 border-green-500/30">
                <Shield className="h-3 w-3 mr-1" />
                SOC 2 Compliant
              </Badge>
              <Badge variant="outline" className="bg-blue-500/20 text-blue-600 border-blue-500/30">
                ISO 27001
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Internal Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-blue-600 transition-colors">IT Service Desk</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Security Guidelines</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Training Materials</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Change Requests</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Support & Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:dsai-support@company.com" className="hover:text-blue-600 transition-colors">
                  dsai-support@company.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>Ext. 5542 (Internal)</span>
              </li>
              <li className="flex items-center">
                <Globe className="h-4 w-4 mr-2" />
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Internal Wiki
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center text-sm text-muted-foreground mb-4 md:mb-0">
              <span>© 2024 Enterprise Corp. All rights reserved.</span>
              <div className="mx-2">•</div>
              <span>Internal Use Only</span>
              <div className="mx-2">•</div>
              <span>Version 2.1.3</span>
            </div>
            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>System Status: Operational</span>
              </div>
              <div>Last Deployment: {new Date().toLocaleDateString()}</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
