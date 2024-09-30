import { PublicError } from "@/lib/utils/errors";

export class RateLimitError extends PublicError {
  constructor() {
    super("You have exceeded the rate limit");
    this.name = "RateLimitError";
  }
}
