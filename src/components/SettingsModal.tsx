
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Mail, Phone, MapPin, Home, Globe } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

interface UserProfile {
  first_name?: string;
  last_name?: string;
  phone?: string;
  country?: string;
  residence?: string;
  address?: string;
  zip_code?: string;
  country_code?: string;
}

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal = ({ isOpen, onClose }: SettingsModalProps) => {
  const { user } = useAuth();
  const [userProfile, setUserProfile] = useState<UserProfile>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user && isOpen) {
      fetchUserProfile();
    }
  }, [user, isOpen]);

  const fetchUserProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user?.id)
        .single();
      
      if (data) {
        setUserProfile(data);
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const profileData = [
    {
      icon: User,
      label: "Full Name",
      value: userProfile.first_name && userProfile.last_name 
        ? `${userProfile.first_name} ${userProfile.last_name}` 
        : "Not provided"
    },
    {
      icon: Mail,
      label: "Email",
      value: user?.email || "Not provided"
    },
    {
      icon: Phone,
      label: "Phone",
      value: userProfile.phone || "Not provided"
    },
    {
      icon: Globe,
      label: "Country",
      value: userProfile.country || "Not provided"
    },
    {
      icon: MapPin,
      label: "Residence",
      value: userProfile.residence || "Not provided"
    },
    {
      icon: Home,
      label: "Address",
      value: userProfile.address || "Not provided"
    },
    {
      icon: MapPin,
      label: "Zip Code",
      value: userProfile.zip_code || "Not provided"
    },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass-card border-white/20 text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-orbitron font-bold text-space">
            User Settings
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <Card className="glass-card border-white/20">
            <CardHeader>
              <CardTitle className="text-lg font-orbitron text-space">
                Registration Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {loading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-space mx-auto"></div>
                  <p className="mt-2 text-white/60">Loading profile...</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {profileData.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-center gap-3 p-3 glass-card border-white/10 rounded-lg">
                        <Icon className="h-5 w-5 text-space flex-shrink-0" />
                        <div>
                          <p className="text-sm text-white/60 font-orbitron">{item.label}</p>
                          <p className="text-white font-orbitron font-medium">{item.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button
              onClick={onClose}
              className="moving-gradient text-white font-orbitron font-semibold"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
