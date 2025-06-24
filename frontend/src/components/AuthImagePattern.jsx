// const AuthImagePattern = ({ title, subtitle }) => {
//   return (
//     <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
//       <div className="max-w-md text-center">
//         <div className="grid grid-cols-3 gap-3 mb-8">
//           {[...Array(9)].map((_, i) => (
//             <div
//               key={i}
//               className={`aspect-square rounded-2xl bg-primary/10 ${
//                 i % 2 === 0 ? "animate-pulse" : ""
//               }`}
//             />
//           ))}
//         </div>
//         <h2 className="text-2xl font-bold mb-4">{title}</h2>
//         <p className="text-base-content/60">{subtitle}</p>
//       </div>
//     </div>
//   );
// };

// export default AuthImagePattern;

import { User, Users, UserCheck, UserPlus, UserX, Crown, Shield, Star, Heart } from "lucide-react"

const AuthImagePattern = ({ title, subtitle }) => {
  const avatarIcons = [
    { Icon: User, color: "text-blue-500" },
    { Icon: Users, color: "text-green-500" },
    { Icon: UserCheck, color: "text-purple-500" },
    { Icon: UserPlus, color: "text-orange-500" },
    { Icon: Crown, color: "text-yellow-500" },
    { Icon: Shield, color: "text-red-500" },
    { Icon: Star, color: "text-pink-500" },
    { Icon: Heart, color: "text-rose-500" },
    { Icon: UserX, color: "text-indigo-500" },
  ]

  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {avatarIcons.map((avatar, i) => {
            const { Icon, color } = avatar
            return (
              <div
                key={i}
                className={`aspect-square rounded-2xl bg-primary/10 flex items-center justify-center ${
                  i % 2 === 0 ? "animate-pulse" : ""
                }`}
              >
                <Icon className={`w-10 h-10 ${color}`} />
              </div>
            )
          })}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  )
}

export default AuthImagePattern
