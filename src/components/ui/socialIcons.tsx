import type { IconType } from "react-icons";
import {
  FaEnvelope,
  FaFacebook,
  FaFileAlt,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import type { SocialLinkId } from "../../types";

export const socialIcons: Record<SocialLinkId, IconType> = {
  linkedin: FaLinkedin,
  github: FaGithub,
  email: FaEnvelope,
  phone: FaPhone,
  whatsapp: FaWhatsapp,
  facebook: FaFacebook,
  cv: FaFileAlt,
};
