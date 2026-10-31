import type { IconType } from "react-icons";
import { FaEnvelope, FaFacebook, FaFileAlt, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";
import type { SocialLinkId } from "../../types";

export const socialIcons: Record<SocialLinkId, IconType> = {
  linkedin: FaLinkedin,
  email: FaEnvelope,
  phone: FaPhone,
  whatsapp: FaWhatsapp,
  facebook: FaFacebook,
  cv: FaFileAlt,
};
